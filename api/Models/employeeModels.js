const { db } = require('../config/database')
const EmployeeModals = {
	async getAllEmployees() {
		try {
			const result = await db.query('SELECT * FROM employess;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getEmployeeById(user_id) {
		try {
			const result = await db.query('SELECT * FROM employess WHERE id = $1;', [
				user_id,
			])

			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createEmployee(
		first_name,
		last_name,
		third_name,
		address,
		id_position,
		telephone
	) {
		try {
			const result = await db.query(
				'INSERT INTO employess(first_name, last_name, third_name, address, id_position, telephone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',
				[first_name, last_name, third_name, address, id_position, telephone]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateEmployee(
		id,
		first_name,
		last_name,
		third_name,
		address,
		id_position,
		telephone
	) {
		try {
			const result = await db.query(
				'UPDATE employess SET first_name = $2, last_name = $3, third_name = $4, address = $5, id_position = $6, telephone = $7 WHERE id=$1 RETURNING *;',
				[id, first_name, last_name, third_name, address, id_position, telephone]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteEmployee(id) {
		try {
			await db.query('DELETE FROM employess WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}

module.exports = EmployeeModals
