const { User } = require('../Models/models')
const { getUser } = require('../controllers/users')

const getResponseUser = {
	schema: {
		tags: ['users'],
		response: {
			200: {
				success: { type: 'boolean' },
				data: User,
			},
			404: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
			500: {
				success: { type: 'boolean', default: false },
				message: { type: 'string' },
			},
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: getUser,
}

function usersRoutes(fastify, options, done) {
	fastify.get('/users/:id', getResponseUser)
	done()
}

module.exports = usersRoutes
