const RoomModels = require('../Models/roomsModels')

const GET = {
	async getAllRooms(req, reply) {
		try {
			const result = await RoomModels.getAllRooms()
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
	async getRoomById(req, reply) {
		try {
			const { id } = req.params
			const result = await RoomModels.getRoomsById(id)
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
					.send({ success: false, message: 'Комната не найдена' })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createRoom(req, reply) {
		try {
			const { count_person, id_type, price, id_employee } = req.body
			if (!count_person)
				return reply
					.status(500)
					.send({ success: false, message: 'нет count_person' })
			if (!id_type)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_type' })
			if (!id_employee)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_employee' })
			if (!price)
				return reply.status(500).send({ success: false, message: 'нет price' })
			const result = await RoomModels.createRooms(
				count_person,
				id_type,
				price,
				id_employee
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
	async updateRoom(req, reply) {
		try {
			const { id } = req.params
			const { count_person, id_type, price, id_employee } = req.body
			const result = await RoomModels.updateRooms(
				id,
				count_person,
				id_type,
				price,
				id_employee
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
	async deleteRoom(req, reply) {
		try {
			const { id } = req.params
			const result = await RoomModels.deleteRooms(id)
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
