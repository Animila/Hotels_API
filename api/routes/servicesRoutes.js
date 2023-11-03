// const { User } = require('../Models/models')\

// const getAllServices = {
// 	schema: {
// 		tags: ['services'],
// 		response: {
// 			200: {
// 				success: { type: 'boolean' },
// 				data: User,
// 			},
// 			404: {
// 				success: { type: 'boolean', default: false },
// 				message: { type: 'string' },
// 			},
// 			500: {
// 				success: { type: 'boolean', default: false },
// 				message: { type: 'string' },
// 			},
// 		},
// 		params: {
// 			id: { type: 'number' },
// 		},
// 	},
// 	handler: getUser,
// }

// const loginResponseUser = {
// 	schema: {
// 		tags: ['services'],
// 		response: {
// 			200: {
// 				success: { type: 'boolean' },
// 				data: User,
// 			},
// 			404: {
// 				success: { type: 'boolean', default: false },
// 				message: { type: 'string' },
// 			},
// 			500: {
// 				success: { type: 'boolean', default: false },
// 				message: { type: 'string' },
// 			},
// 		},
// 		body: {
// 			login: { type: 'string' },
// 			password: { type: 'string' },
// 		},
// 	},
// 	handler: loginUser,
// }

// const registerResponseUser = {
// 	schema: {
// 		tags: ['services'],
// 		response: {
// 			200: {
// 				success: { type: 'boolean' },
// 				data: User,
// 			},
// 			404: {
// 				success: { type: 'boolean', default: false },
// 				message: { type: 'string' },
// 			},
// 			500: {
// 				success: { type: 'boolean', default: false },
// 				message: { type: 'string' },
// 			},
// 		},
// 		body: {
// 			login: { type: 'string' },
// 			password: { type: 'string' },
// 			first_name: { type: 'string' },
// 			last_name: { type: 'string' },
// 			third_name: { type: 'string' },
// 			sex: { type: 'number' },
// 			birthday: { type: 'string' },
// 			start_day: { type: 'string' },
// 			end_day: { type: 'string' },
// 		},
// 	},
// 	handler: registerUser,
// }

// function usersRoutes(fastify, options, done) {
// 	fastify.post('/users/login', loginResponseUser)
// 	fastify.post('/users/register', registerResponseUser)
// 	fastify.get('/users/:id', getResponseUser)
// 	done()
// }

// module.exports = usersRoutes
