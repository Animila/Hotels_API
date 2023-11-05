const GuestModals = require('../Models/guestModels')

const GET = {
	async getAllGuests(req, reply) {
		try {
			const result = await GuestModals.getAllGuest()
			console.log(result)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			reply.send({ success: true, data: result.data })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
	async getGuestById(req, reply) {
		try {
			const { id } = req.params
			const result = await GuestModals.getGuestById(id)
			console.log(result)

			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			}
			if (result.data.length <= 0) {
				return reply
					.status(500)
					.send({ success: false, message: 'Гость не найден' })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createGuest(req, reply) {
		try {
			const {
				first_name,
				last_name,
				third_name,
				address,
				sex,
				birthday,
				start_date,
				end_date,
			} = req.body
			if (!first_name)
				return reply
					.status(500)
					.send({ success: false, message: 'нет first_name' })
			if (!last_name)
				return reply
					.status(500)
					.send({ success: false, message: 'нет last_name' })
			if (!third_name)
				return reply
					.status(500)
					.send({ success: false, message: 'нет third_name' })
			if (!address)
				return reply
					.status(500)
					.send({ success: false, message: 'нет address' })
			if (!sex)
				return reply.status(500).send({ success: false, message: 'нет sex' })
			if (!birthday)
				return reply
					.status(500)
					.send({ success: false, message: 'нет birthday' })
			if (!start_date)
				return reply
					.status(500)
					.send({ success: false, message: 'нет start_date' })
			if (!end_date)
				return reply
					.status(500)
					.send({ success: false, message: 'нет end_date' })
			const result = await GuestModals.createGuest(
				first_name,
				last_name,
				third_name,
				address,
				sex,
				birthday,
				start_date,
				end_date
			)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const PUT = {
	async updateGuest(req, reply) {
		try {
			const { id } = req.params
			const {
				first_name,
				last_name,
				third_name,
				address,
				sex,
				birthday,
				start_date,
				end_date,
			} = req.body
			const result = await GuestModals.updateGuest(
				id,
				first_name,
				last_name,
				third_name,
				address,
				sex,
				birthday,
				start_date,
				end_date
			)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const DELETE = {
	async deleteGuest(req, reply) {
		try {
			const { id } = req.params
			const result = await GuestModals.deleteGuest(id)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			console.log(result)
			reply.send({ success: true, data: { id: id } })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

module.exports = {
	GET,
	POST,
	PUT,
	DELETE,
}
