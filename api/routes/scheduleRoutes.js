const { Schedule } = require('../config/models')

const schedulesController = require('../controllers/scheduleController')

const getAll = {
	schema: {
		tags: ['schedules'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Schedule,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: schedulesController.GET.getAllSchedules,
}

const getById = {
	schema: {
		tags: ['schedules'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Schedule,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: schedulesController.GET.getScheduleById,
}

const create = {
	schema: {
		tags: ['schedules'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Schedule,
			},
		},
		body: {
			title: { type: 'string' },
			price: { type: 'string' },
		},
	},
	handler: schedulesController.POST.createSchedule,
}
const updateById = {
	schema: {
		tags: ['schedules'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Schedule,
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
	handler: schedulesController.PUT.updateSchedule,
}
const deleteById = {
	schema: {
		tags: ['schedules'],
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
	handler: schedulesController.DELETE.deleteSchedule,
}

function schedulesRoutes(fastify, options, done) {
	fastify.get('/schedules', getAll)
	fastify.get('/schedules/:id', getById)
	fastify.post('/schedules', create)
	fastify.put('/schedules/:id', updateById)
	fastify.delete('/schedules/:id', deleteById)
	done()
}

module.exports = schedulesRoutes
