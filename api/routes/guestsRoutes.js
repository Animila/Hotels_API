const { Guest } = require('../config/models')

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
		},
		params: {
			id: { type: 'number' },
		},
	},
	handler: getUser,
}

function guestsRoutes(fastify, options, done) {
	fastify.get('/guests')
	fastify.post('/guests')
	fastify.get('/guests/:id')
	fastify.update('/guests/:id')
	fastify.delete('/guests/:id')
	done()
}

module.exports = guestsRoutes
