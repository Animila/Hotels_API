const { Guest } = require('../config/models')
const guestsController = require('../controllers/guestsController')

const getAll = {
	schema: {
		tags: ['guests'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Guest,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: guestsController.GET.getAllGuests,
}

const getById = {
	schema: {
		tags: ['guests'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Guest,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: guestsController.GET.getGuestById,
}

const getStatics = {
	schema: {
		tags: ['guests'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					count: { type: 'number' },
					count_of_day: { type: 'number' },
				},
			},
		},
	},
	handler: guestsController.GET.getStaticsGuest,
}

const create = {
	schema: {
		tags: ['guests'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Guest,
			},
		},
		body: {
			first_name: { type: 'string' },
			last_name: { type: 'string' },
			third_name: { type: 'string' },
			address: { type: 'string' },
			sex: { type: 'number' },
			birthday: { type: 'string' },
			start_date: { type: 'string' },
			end_date: { type: 'string' },
		},
	},
	handler: guestsController.POST.createGuest,
}
const updateById = {
	schema: {
		tags: ['guests'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Guest,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			first_name: { type: 'string' },
			last_name: { type: 'string' },
			third_name: { type: 'string' },
			address: { type: 'string' },
			sex: { type: 'number' },
			birthday: { type: 'string' },
			start_date: { type: 'string' },
			end_date: { type: 'string' },
		},
	},
	handler: guestsController.PUT.updateGuest,
}
const deleteById = {
	schema: {
		tags: ['guests'],
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
	handler: guestsController.DELETE.deleteGuest,
}

function guestsRoutes(fastify, options, done) {
	fastify.get('/guests', getAll)
	fastify.get('/guests/statics', getStatics)
	fastify.get('/guests/:id', getById)
	fastify.post('/guests', create)
	fastify.put('/guests/:id', updateById)
	fastify.delete('/guests/:id', deleteById)
	done()
}

module.exports = guestsRoutes
