const { Service } = require('../config/models')
const serviceController = require('../controllers/servicesController')

const getAll = {
	schema: {
		tags: ['services'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Service,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: serviceController.GET.getAllServices,
}

const getById = {
	schema: {
		tags: ['services'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Service,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: serviceController.GET.getServiceById,
}

const create = {
	schema: {
		tags: ['services'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Service,
			},
		},
		body: {
			title: { type: 'string' },
			price: { type: 'string' },
		},
	},
	handler: serviceController.POST.createService,
}
const updateById = {
	schema: {
		tags: ['services'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Service,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			title: { type: 'string' },
			price: { type: 'string' },
		},
	},
	handler: serviceController.PUT.updateService,
}
const deleteById = {
	schema: {
		tags: ['services'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: { id: { type: 'number' } },
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: serviceController.DELETE.deleteService,
}

function servicesRoutes(fastify, options, done) {
	fastify.get('/services', getAll)
	fastify.get('/services/:id', getById)
	fastify.post('/services', create)
	fastify.put('/services/:id', updateById)
	fastify.delete('/services/:id', deleteById)
	done()
}

module.exports = servicesRoutes
