const RoomModels = require('../Models/roomsModels')

const GET = {
	async getAllRooms(req, reply) {
		try {
			const result = await RoomModels.getAllRooms()
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
			(result)

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
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},

	async getStatics(req, reply) {
		try {
			const precent = await RoomModels.getPercentFree()
			if (!precent.success) {
				console.error('Ошибка базы данных: ', precent.message)
				return reply
					.status(502)
					.send({ success: false, message: precent.message })
			}


			reply.send({
				success: true,
				data: { precent: precent.data[0].occupancy_percentage },
			})
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createRoom(req, reply) {
		try {
			const { count_person, id_type, price, id_employess } = req.body
			if (!count_person)
				return reply
					.status(500)
					.send({ success: false, message: 'нет count_person' })
			if (!id_type)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_type' })
			if (!id_employess)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_employess' })
			if (!price)
				return reply.status(500).send({ success: false, message: 'нет price' })
			const result = await RoomModels.createRooms(
				count_person,
				id_type,
				price,
				id_employess
			)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
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
			const { count_person, id_type, price, id_employess } = req.body
			const result = await RoomModels.updateRooms(
				id,
				count_person,
				id_type,
				price,
				id_employess
			)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			(result)
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
