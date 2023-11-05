const ScheduleModels = require('../Models/scheduleModels')

const GET = {
	async getAllSchedules(req, reply) {
		try {
			const result = await ScheduleModels.getAllSchedule()
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
	async getScheduleById(req, reply) {
		try {
			const { id } = req.params
			const result = await ScheduleModels.getScheduleById(id)
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
					.send({ success: false, message: 'Расписание не найдено' })
			}
			console.log(result)
			reply.send({ success: true, data: result.data[0] })
		} catch (error) {
			reply.status(500).send({ success: false, message: error })
		}
	},
}

const POST = {
	async createSchedule(req, reply) {
		try {
			const { employee_id, day_of_week_id, start_time, end_time } = req.body
			if (!employee_id)
				return reply
					.status(500)
					.send({ success: false, message: 'нет employee_id' })
			if (!day_of_week_id)
				return reply
					.status(500)
					.send({ success: false, message: 'нет day_of_week_id' })
			if (!start_time)
				return reply
					.status(500)
					.send({ success: false, message: 'нет start_time' })
			if (!end_time)
				return reply
					.status(500)
					.send({ success: false, message: 'нет end_time' })
			const result = await ScheduleModels.createSchedule(
				employee_id,
				day_of_week_id,
				start_time,
				end_time
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
	async updateSchedule(req, reply) {
		try {
			const { id } = req.params
			const { employee_id, day_of_week_id, start_time, end_time } = req.body
			const result = await ScheduleModels.updateSchedule(
				id,
				employee_id,
				day_of_week_id,
				start_time,
				end_time
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
	async deleteSchedule(req, reply) {
		try {
			const { id } = req.params
			const result = await ScheduleModels.deleteSchedule(id)
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
