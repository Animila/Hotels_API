const { db } = require('../config/database')

const ScheduleModels = {
	async getAllSchedule() {
		try {
			const result = await db.query('SELECT * FROM dutyschedule;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getScheduleById(schedule_id) {
		try {
			const result = await db.query(
				'SELECT * FROM dutyschedule WHERE id = $1;',
				[schedule_id]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createSchedule(employee_id, day_of_week_id, start_time, end_time) {
		try {
			const result = await db.query(
				'INSERT INTO dutyschedule(id_employess, id_day_of_week, start_time, end_time) VALUES ($1, $2, $3, $4);',
				[employee_id, day_of_week_id, start_time, end_time]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateSchedule(id, employee_id, day_of_week_id, start_time, end_time) {
		try {
			const result = await db.query(
				'UPDATE dutyschedule SET id_employess=$2, id_day_of_week=$3, start_time=$4, end_time=$5 WHERE id = $1;',
				[id, employee_id, day_of_week_id, start_time, end_time]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteSchedule(schedule_id) {
		try {
			const result = await db.query(
				'DELETE FROM dutyschedule WHERE schedule_id=$1;',
				[schedule_id]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = ScheduleModels
