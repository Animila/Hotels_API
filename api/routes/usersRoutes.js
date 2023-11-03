const { User } = require('../config/models')
const usersController = require('../controllers/usersController')

const getAll = {
	schema: {
		tags: ['users'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: {
					type: 'array',
					items: User,
				},
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
	},
	handler: usersController.GET.getAllUsers,
}
const login = {
	schema: {
		tags: ['users'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: User,
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
		body: {
			login: { type: 'string' },
			password: { type: 'string' },
		},
	},
	handler: usersController.POST.loginUser,
}
const register = {
	schema: {
		tags: ['users'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: User,
			},
		},
		body: {
			login: { type: 'string' },
			password: { type: 'string' },
			id_person: { type: 'number' },
		},
	},
	handler: usersController.POST.registerUser,
}
const getById = {
	schema: {
		tags: ['users'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: User,
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: usersController.GET.getUserById,
}
const updateById = {
	schema: {
		tags: ['users'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: User,
			},
		},
		params: {
			id: { type: 'number' },
		},
		body: {
			login: { type: 'string' },
			password: { type: 'string' },
		},
	},
	handler: usersController.PUT.updateUser,
}
const deleteById = {
	schema: {
		tags: ['users'],
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
	handler: usersController.DELETE.deleteUser,
}

function usersRoutes(fastify, options, done) {
	fastify.get('/users', getAll)
	fastify.post('/users/login', login)
	fastify.post('/users/register', register)
	fastify.get('/users/:id', getById)
	fastify.put('/users/:id', updateById)
	fastify.delete('/users/:id', deleteById)
	done()
}

module.exports = usersRoutes
