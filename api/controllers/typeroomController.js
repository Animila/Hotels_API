const TypeRoomModels = require('../Models/typeroomModels')

const GET = {
	async getAllTypesRoom(req, reply) {
		try {
			const result = await TypeRoomModels.getAllTypeRooms()
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
	async getTypeRoomById(req, reply) {
		try {
			const { id } = req.params
			const result = await TypeRoomModels.getTypeRoomById(id)

			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			}
			if (result.data.length <= 0) {
				return reply
					.status(500)
					.send({ success: false, message: 'Тип комнаты не найден' })
			}
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createTypeRoom(req, reply) {
		try {
			const { title } = req.body
			if (!title)
				return reply.status(500).send({ success: false, message: 'нет title' })
			const result = await TypeRoomModels.createTypeRoom(title)
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
	async updateTypeRoom(req, reply) {
		try {
			const { id } = req.params
			const { title } = req.body
			const result = await TypeRoomModels.updateTypeRoom(id, title)
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

const DELETE = {
	async deleteTypeRoom(req, reply) {
		try {
			const { id } = req.params
			const result = await TypeRoomModels.deleteTypeRoom(id)
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
