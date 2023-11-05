const { Distribution } = require('../config/models')
const distributionController = require('../controllers/distributionsController')

const getAll = {
	schema: {
		tags: ['distributions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Distribution,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: distributionController.GET.getAllDistributions,
}

const getById = {
	schema: {
		tags: ['distributions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Distribution,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: distributionController.GET.getDistributionsById,
}

const create = {
	schema: {
		tags: ['distributions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Distribution,
			},
		},
		body: {
			id_rooms: { type: 'number' },
			id_guests: { type: 'number' },
		},
	},
	handler: distributionController.POST.createDistributions,
}
const updateById = {
	schema: {
		tags: ['distributions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Distribution,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			id_rooms: { type: 'number' },
			id_guests: { type: 'number' },
		},
	},
	handler: distributionController.PUT.updateDistributions,
}
const deleteById = {
	schema: {
		tags: ['distributions'],
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
	handler: distributionController.DELETE.deleteDistributions,
}

function distributionsRoutes(fastify, options, done) {
	fastify.get('/distributions', getAll)
	fastify.get('/distributions/:id', getById)
	fastify.post('/distributions', create)
	fastify.put('/distributions/:id', updateById)
	fastify.delete('/distributions/:id', deleteById)
	done()
}

module.exports = distributionsRoutes
