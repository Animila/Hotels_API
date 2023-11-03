const { db } = require('../config/database')
const ServiceModels = {
	async getAllServices() {
		try {
			const result = await db.query('SELECT * FROM services;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getServiceById(id) {
		try {
			const result = await db.query('SELECT * FROM services WHERE id = $1;', [
				id,
			])
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createService(title, price) {
		try {
			const result = await db.query(
				'INSERT INTO services(title, price) VALUES ($1, $2) RETURNING *;',
				[title, price]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateService(id, title, price) {
		try {
			const result = await db.query(
				'UPDATE services SET title = $2, price=$3 WHERE id=$1 RETURNING *;',
				[id, title, price]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteService(id) {
		try {
			await db.query('DELETE FROM services WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = ServiceModels
