const employeeModels = require('../Models/employeeModels')
const guestModels = require('../Models/guestModels')
const userModels = require('../Models/userModels')

const GET = {
	async getAllUsers(req, reply) {
		try {
			const result = await userModels.getAll()
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}

			const users = result.data

			const userProfiles = await Promise.all(
				users.map(async user => {
					return await getProfile(user)
				})
			)
			console.log(userProfiles)

			reply.send({ success: true, data: userProfiles })
		} catch (error) {
			reply.send({ success: false, message: error })
		}
	},

	async getUserById(req, reply) {
		try {
			const { id } = req.params
			// пытаемся получить пользователя по id
			const resultUser = await userModels.getUserById(id)
			if (!resultUser.success)
				return reply
					.status(500)
					.send({ success: false, message: resultUser.message })

			if (resultUser.data.length <= 0)
				return reply
					.status(500)
					.send({ success: false, message: 'Пользователь не найден' })
			// получаем данные о пользователе
			const dataUser = resultUser.data[0]
			console.log(dataUser)
			const user = await getProfile(dataUser)

			reply.send({ success: true, data: user })
			const result = await userModels.getUserById(req.params.id)
			reply.send({ success: true, data: result })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async loginUser(req, reply) {
		const { login, password } = req.body
		console.log(login, password)
		const result = await userModels.loginAuth(login, password)
		if (!result.success)
			return reply.status(502).send({ success: false, message: result.message })

		if (result.data.length <= 0)
			return reply
				.status(404)
				.send({ success: false, message: 'Неверный логин или пароль' })

		const user = await getProfile(result.data[0])

		return reply.status(200).send({ success: true, data: user })
		// password =
		// const result = await getUserById(id)
		//
	},
	async registerUser(req, reply) {
		const data = req.body

		if (!data.login) {
			;[]
			return reply.status(500).send({ success: false, message: 'нет login' })
		}
		if (!data.password) {
			return reply.status(500).send({ success: false, message: 'нет password' })
		}

		if (!data.type) {
			return reply.status(500).send({ success: false, message: 'нет type' })
		}
		if (!data.id_person) {
			return reply
				.status(500)
				.send({ success: false, message: 'нет id_person' })
		}

		const resultIdPerson = await userModels.checkIdPerson(data.id_person)
		if (!resultIdPerson.success)
			return reply
				.status(502)
				.send({ success: false, message: resultIdPerson.message })
		if (resultIdPerson.data.length > 0 && resultIdPerson.data[0].count >= 1)
			return reply.status(500).send({
				success: false,
				message: 'У данного пользователя уже есть аккаунт',
			})

		const result = await userModels.checkLogin(data.login)
		if (!result.success)
			return reply.status(502).send({ success: false, message: result.message })
		if (result.data.length > 0 && result.data[0].count >= 1)
			return reply
				.status(500)
				.send({ success: false, message: 'Данный логин уже используется' })

		const regUser = await userModels.createUser(
			data.login,
			data.password,
			data.type,
			data.id_person
		)

		if (!regUser.success) {
			console.log(regUser.message)
			return reply
				.status(500)
				.send({ success: false, message: regUser.message })
		}

		const user = await getProfile(regUser.data)

		console.log(user)

		return reply.status(200).send({ success: true, data: user })
	},
}

const PUT = {
	async updateUser(req, reply) {
		try {
			const { id } = req.params
			const { login, password } = req.body
			const result = await userModels.updateUser(id, login, password)
			if (!result.success)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			console.log(result)
			reply.send({ success: true, data: result.data })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const DELETE = {
	async deleteUser(req, reply) {
		try {
			const { id } = req.params

			const resultUser = await userModels.getUserById(id)
			if (!resultUser.success)
				return reply
					.status(500)
					.send({ success: false, message: resultUser.message })

			if (resultUser.data.length <= 0)
				return reply
					.status(500)
					.send({ success: false, message: 'Пользователь не найден' })
			const result = await userModels.deleteUser(id)
			if (!result.success)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			console.log({ success: true, data: { id: id } })
			reply.send({ success: true, data: { id: id } })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

//

module.exports = {
	GET,
	POST,
	PUT,
	DELETE,
}

const getProfile = async user => {
	const type_user = user.type
	var profile = null

	switch (type_user) {
		case 'Гость':
			profile = await guestModels.getGuestById(user.id_person)
			if (!profile.success)
				return reply
					.status(502)
					.send({ success: false, message: profile.message })

			if (profile.data.length <= 0)
				return reply
					.status(404)
					.send({ success: false, message: 'Профиль не найден' })
			break
		case 'Администратор':
		case 'Персонал':
			profile = await employeeModels.getEmployeeById(user.id_person)
			if (!profile.success)
				return reply
					.status(502)
					.send({ success: false, message: profile.message })

			if (profile.data.length <= 0)
				return reply
					.status(404)
					.send({ success: false, message: 'Профиль не найден' })
			break
	}
	user.account = profile.data[0]
	return user
}
