const { Service, Employee } = require('../config/models')
const employeesController = require('../controllers/employeeController')

const getAll = {
	schema: {
		tags: ['employees'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: Employee,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: employeesController.GET.getAllEmployees,
}

const getById = {
	schema: {
		tags: ['employees'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Employee,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: employeesController.GET.getEmployeeById,
}

const create = {
	schema: {
		tags: ['employees'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Employee,
			},
		},
		body: {
			first_name: { type: 'string' },
			last_name: { type: 'string' },
			third_name: { type: 'string' },
			address: { type: 'string' },
			id_position: { type: 'number' },
			telephone: { type: 'string' },
		},
	},
	handler: employeesController.POST.createEmployee,
}
const updateById = {
	schema: {
		tags: ['employees'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: Employee,
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
			id_position: { type: 'number' },
			telephone: { type: 'string' },
		},
	},
	handler: employeesController.PUT.updateEmployee,
}
const deleteById = {
	schema: {
		tags: ['employees'],
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
	handler: employeesController.DELETE.deleteEmployee,
}

function employeesRoutes(fastify, options, done) {
	fastify.get('/employees', getAll)
	fastify.get('/employees/:id', getById)
	fastify.post('/employees', create)
	fastify.put('/employees/:id', updateById)
	fastify.delete('/employees/:id', deleteById)
	done()
}

module.exports = employeesRoutes
