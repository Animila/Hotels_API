const distributionsModels = require('../Models/distributionsModels')

const GET = {
	async getAllDistributions(req, reply) {
		try {
			const result = await distributionsModels.getAllDistributions()
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
	async getDistributionsById(req, reply) {
		try {
			const { id } = req.params
			const result = await distributionsModels.getDistributionById(id)

			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			}
			if (result.data.length <= 0) {
				return reply
					.status(500)
					.send({ success: false, message: 'Бронь не найдена' })
			}
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createDistributions(req, reply) {
		try {
			const { id_rooms, id_guests } = req.body
			if (!id_rooms)
				return reply.status(500).send({ success: false, message: 'нет title' })
			if (!id_guests)
				return reply.status(500).send({ success: false, message: 'нет price' })
			const result = await distributionsModels.createDistribution(
				id_rooms,
				id_guests
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
	async updateDistributions(req, reply) {
		try {
			const { id } = req.params
			const { id_rooms, id_guests } = req.body
			const result = await distributionsModels.updateDistribution(
				id,
				id_rooms,
				id_guests
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

const DELETE = {
	async deleteDistributions(req, reply) {
		try {
			const { id } = req.params
			const result = await distributionsModels.deleteDistribution(id)
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
