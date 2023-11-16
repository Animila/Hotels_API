const ProvisionModels = require('../Models/provisionModels')

const GET = {
	async getAllProvisions(req, reply) {
		try {
			const result = await ProvisionModels.getAllProvisions()
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
	async getProvisionById(req, reply) {
		try {
			const { id } = req.params
			const result = await ProvisionModels.getProvisionById(id)

			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			}
			if (result.data.length <= 0) {
				return reply
					.status(500)
					.send({ success: false, message: 'Заказа услуги не найдена' })
			}
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createProvision(req, reply) {
		try {
			const { id_service, count, id_guest, result_price, date, id_employess } =
				req.body
			if (!id_service)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_service' })
			if (!count)
				return reply.status(500).send({ success: false, message: 'нет count' })
			if (!id_guest)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_guest' })
			if (!result_price)
				return reply
					.status(500)
					.send({ success: false, message: 'нет result_price' })
			if (!date)
				return reply.status(500).send({ success: false, message: 'нет date' })
			if (!id_employess)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_employess' })
			const result = await ProvisionModels.createProvision(
				id_service,
				count,
				id_guest,
				result_price,
				date,
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
	async updateProvision(req, reply) {
		try {
			const { id } = req.params
			const { id_service, count, id_guest, result_price, date, id_employess } =
				req.body
			const result = await ProvisionModels.updateProvision(
				id,
				id_service,
				count,
				id_guest,
				result_price,
				date,
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

const DELETE = {
	async deleteProvision(req, reply) {
		try {
			const { id } = req.params
			const result = await ProvisionModels.deleteProvision(id)
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
