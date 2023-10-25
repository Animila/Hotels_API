const { getUserById, getGuestById, getEmployeeById } = require('../Models/user')

const getUser = async (req, reply) => {
	const { id } = req.params
	const result = await getUserById(id)
	if (!result.success)
		return reply.status(500).send({ success: false, message: result.message })

	if (result.data.length <= 0)
		return reply
			.status(404)
			.send({ success: false, message: 'Пользователь не найден' })

	const user = result.data[0]
	const type_user = user.type
	var profile = null

	switch (type_user) {
		case 'Гость':
			profile = await getGuestById(user.id_person)
			if (!result.success)
				return reply
					.status(500)
					.send({ success: false, message: result.message })

			if (result.data.length <= 0)
				return reply
					.status(404)
					.send({ success: false, message: 'Профиль не найден' })
			break
		case 'Администратор':
		case 'Персонал':
			profile = await getEmployeeById(user.id_person)
			if (!result.success)
				return reply
					.status(500)
					.send({ success: false, message: result.message })

			if (result.data.length <= 0)
				return reply
					.status(404)
					.send({ success: false, message: 'Профиль не найден' })
			break
	}
	console.log(user)
	user.account = profile.data[0]
	console.log(user)
	reply.send({ success: true, data: user })
}

module.exports = {
	getUser,
}
