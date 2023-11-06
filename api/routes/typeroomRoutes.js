const { TypeRoom } = require('../config/models')
const TypeRoomController = require('../controllers/typeroomController')

const getAll = {
	schema: {
		tags: ['typesroom'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: TypeRoom,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: TypeRoomController.GET.getAllTypesRoom,
}

const getById = {
	schema: {
		tags: ['typesroom'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: TypeRoom,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: TypeRoomController.GET.getTypeRoomById,
}

const create = {
	schema: {
		tags: ['typesroom'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: TypeRoom,
			},
		},
		body: {
			title: { type: 'string' },
		},
	},
	handler: TypeRoomController.POST.createTypeRoom,
}
const updateById = {
	schema: {
		tags: ['typesroom'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: TypeRoom,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			title: { type: 'string' },
		},
	},
	handler: TypeRoomController.PUT.updateTypeRoom,
}
const deleteById = {
	schema: {
		tags: ['typesroom'],
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
	handler: TypeRoomController.DELETE.deleteTypeRoom,
}

function typesroomRoutes(fastify, options, done) {
	fastify.get('/typesroom', getAll)
	fastify.get('/typesroom/:id', getById)
	fastify.post('/typesroom', create)
	fastify.put('/typesroom/:id', updateById)
	fastify.delete('/typesroom/:id', deleteById)
	done()
}

module.exports = typesroomRoutes
