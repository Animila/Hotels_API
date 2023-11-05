const { Room } = require('../config/models')
const roomsController = require('../controllers/roomsController')

const getAll = {
	schema: {
		tags: ['rooms'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Room,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: roomsController.GET.getAllRooms,
}

const getById = {
	schema: {
		tags: ['rooms'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Room,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: roomsController.GET.getRoomById,
}

const create = {
	schema: {
		tags: ['rooms'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Room,
			},
		},
		body: {
			count_person: { type: 'number' },
			id_type: { type: 'number' },
			price: { type: 'number' },
			id_employee: { type: 'number' },
		},
	},
	handler: roomsController.POST.createRoom,
}

const updateById = {
	schema: {
		tags: ['rooms'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Room,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			count_person: { type: 'number' },
			id_type: { type: 'number' },
			price: { type: 'number' },
			id_employee: { type: 'number' },
		},
	},
	handler: roomsController.PUT.updateRoom,
}

const deleteById = {
	schema: {
		tags: ['rooms'],
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
	handler: roomsController.DELETE.deleteRoom,
}

function roomsRoutes(fastify, options, done) {
	fastify.get('/rooms', getAll)
	fastify.get('/rooms/:id', getById)
	fastify.post('/rooms', create)
	fastify.put('/rooms/:id', updateById)
	fastify.delete('/rooms/:id', deleteById)
	done()
}

module.exports = roomsRoutes
