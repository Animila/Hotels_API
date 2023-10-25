const fastify = require('fastify')({ logger: true })
const PORT = 5000

// const cors = require('@fastify-cors')

fastify.register(require('@fastify/swagger'), {
	exposeRoute: true,
	routePrefix: '/',
	swagger: {
		info: { title: 'Байкалский отдых' },
	},
})
fastify.register(require('./routes/users'))

// fastify.register(cors, {
// 	origin: ['http://localhost:80', 'http://localhost', 'http://client.ru'],
// 	methods: 'GET,POST,PUT,DELETE',
// })

const start = async () => {
	try {
		await fastify.listen({ port: PORT, host: '0.0.0.0' })
	} catch (error) {
		fastify.log.error(error)
		process.exit(1)
	}
}

start()
