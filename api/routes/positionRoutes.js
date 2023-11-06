const { Position } = require('../config/models')
const positionController = require('../controllers/positionController')

const getAll = {
	schema: {
		tags: ['positions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Position,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: positionController.GET.getAllPositions,
}

const getById = {
	schema: {
		tags: ['positions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Position,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: positionController.GET.getPositionById,
}

const create = {
	schema: {
		tags: ['positions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Position,
			},
		},
		body: {
			title: { type: 'string' },
			salary: { type: 'number' },
		},
	},
	handler: positionController.POST.createPosition,
}
const updateById = {
	schema: {
		tags: ['positions'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Position,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			title: { type: 'string' },
			salary: { type: 'number' },
		},
	},
	handler: positionController.PUT.updatePosition,
}
const deleteById = {
	schema: {
		tags: ['positions'],
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
	handler: positionController.DELETE.deletePosition,
}

function positionsRoutes(fastify, options, done) {
	fastify.get('/positions', getAll)
	fastify.get('/positions/:id', getById)
	fastify.post('/positions', create)
	fastify.put('/positions/:id', updateById)
	fastify.delete('/positions/:id', deleteById)
	done()
}

module.exports = positionsRoutes
