const { default: services } = require('../Models/services')

const GET = {
	async getAllServices(req, reply) {
		try {
			const result = await services.getAllServices()
			console.log(result)
			reply.send({ success: true, data: result })
		} catch (error) {
			console.log(error)
			reply.send({ success: false, message: error })
		}
	},
	async getServiceById(req, reply) {
		try {
			const { serviceId } = req.query
			const result = await services.getServiceById(serviceId)
			console.log(result)
			reply.send({ success: true, data: result })
		} catch (error) {
			reply.send({ success: false, message: error })
		}
	},
}

const POST = {
	async createService(req, reply) {
		try {
			const { title, price } = req.body
			const result = await services.createService(title, price)
			console.log(result)
			reply.send({ success: true, data: result })
		} catch (error) {
			console.log(error)
			reply.send({ success: false, message: error })
		}
	},
}

const PUT = {
	async updateService(req, reply) {
		try {
			const { id, title, price } = req.body
			const result = await services.updateService(id, title, price)
			console.log(result)
			reply.send({ success: true, data: result })
		} catch (error) {
			console.log(error)
			reply.send({ success: false, message: error })
		}
	},
}

const DELETE = {
	async deleteService(req, reply) {
		try {
			const { id } = req.query
			const result = await services.deleteService(id)
			console.log(result)
			reply.send({ success: true, data: id })
		} catch (error) {
			console.log(error)
			reply.send({ success: false, message: error })
		}
	},
}

module.exports = {
	GET,
	POST,
	PUT,
	DELETE,
}
