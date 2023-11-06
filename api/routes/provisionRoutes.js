const { Provision } = require('../config/models')
const provisionController = require('../controllers/provisionController')

const getAll = {
	schema: {
		tags: ['provisions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Provision,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: provisionController.GET.getAllProvisions,
}

const getById = {
	schema: {
		tags: ['provisions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Provision,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: provisionController.GET.getProvisionById,
}

const create = {
	schema: {
		tags: ['provisions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Provision,
			},
		},
		body: {
			id_service: { type: 'number' },
			count: { type: 'number' },
			id_guest: { type: 'number' },
			result_price: { type: 'number' },
			date: { type: 'string' },
			id_employess: { type: 'number' },
		},
	},
	handler: provisionController.POST.createProvision,
}

const updateById = {
	schema: {
		tags: ['provisions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Provision,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			id_service: { type: 'number' },
			count: { type: 'number' },
			id_guest: { type: 'number' },
			result_price: { type: 'number' },
			date: { type: 'string' },
			id_employess: { type: 'number' },
		},
	},
	handler: provisionController.PUT.updateProvision,
}

const deleteById = {
	schema: {
		tags: ['provisions'],
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
	handler: provisionController.DELETE.deleteProvision,
}

function provisionsRoutes(fastify, options, done) {
	fastify.get('/provisions', getAll)
	fastify.get('/provisions/:id', getById)
	fastify.post('/provisions', create)
	fastify.put('/provisions/:id', updateById)
	fastify.delete('/provisions/:id', deleteById)
	done()
}

module.exports = provisionsRoutes
