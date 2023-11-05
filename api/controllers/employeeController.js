const EmployeeModals = require('../Models/employeeModels')

const GET = {
	async getAllEmployees(req, reply) {
		try {
			const result = await EmployeeModals.getAllEmployees()
			console.log(result)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			reply.send({ success: true, data: result.data })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
	async getEmployeeById(req, reply) {
		try {
			const { id } = req.params
			const result = await EmployeeModals.getEmployeeById(id)
			console.log(result)

			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(500)
					.send({ success: false, message: result.message })
			}
			if (result.data.length <= 0) {
				return reply
					.status(500)
					.send({ success: false, message: 'Персонал не найден' })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createEmployee(req, reply) {
		try {
			const {
				first_name,
				last_name,
				third_name,
				address,
				id_position,
				telephone,
			} = req.body
			if (!first_name)
				return reply
					.status(500)
					.send({ success: false, message: 'нет first_name' })
			if (!last_name)
				return reply
					.status(500)
					.send({ success: false, message: 'нет last_name' })
			if (!third_name)
				return reply
					.status(500)
					.send({ success: false, message: 'нет third_name' })
			if (!address)
				return reply
					.status(500)
					.send({ success: false, message: 'нет address' })
			if (!id_position)
				return reply
					.status(500)
					.send({ success: false, message: 'нет id_position' })
			if (!telephone)
				return reply
					.status(500)
					.send({ success: false, message: 'нет telephone' })
			const result = await EmployeeModals.createEmployee(
				first_name,
				last_name,
				third_name,
				address,
				id_position,
				telephone
			)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const PUT = {
	async updateEmployee(req, reply) {
		try {
			const { id } = req.params
			const {
				first_name,
				last_name,
				third_name,
				address,
				id_position,
				telephone,
			} = req.body
			const result = await EmployeeModals.updateEmployee(
				id,
				first_name,
				last_name,
				third_name,
				address,
				id_position,
				telephone
			)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const DELETE = {
	async deleteEmployee(req, reply) {
		try {
			const { id } = req.params
			const result = await EmployeeModals.deleteEmployee(id)
			if (!result.success) {
				console.error('Ошибка базы данных: ', result.message)
				return reply
					.status(502)
					.send({ success: false, message: result.message })
			}
			console.log(result)
			reply.send({ success: true, data: { id: id } })
		} catch (error) {
			console.log(error)
			reply.status(500).send({ success: false, message: error })
		}
	},
}

module.exports = {
	GET,
	POST,
	PUT,
	DELETE,
}
