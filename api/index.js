const fastify = require('fastify')({ logger: true })
const PORT = 5000

fastify.register(require('@fastify/swagger'), {
	exposeRoute: true,
	routePrefix: '/',
	swagger: {
		info: {
			title: 'API Гостиницы Байкалский отдых',
			description: 'Для проверки работоспособности базы данных',
			version: '0.1.0',
		},
	},
})
fastify.register(require('./routes/usersRoutes'))
fastify.register(require('./routes/servicesRoutes'))
fastify.register(require('./routes/employessRoutes'))
fastify.register(require('./routes/guestsRoutes'))

const start = async () => {
	try {
		await fastify.listen({ port: PORT, host: '0.0.0.0' })
	} catch (error) {
		fastify.log.error(error)
		process.exit(1)
	}
}

start()
