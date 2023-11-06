const { db } = require('../config/database')
const ProvisionsModels = {
	async getAllProvisions() {
		try {
			const result = await db.query('SELECT * FROM provision_services;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getProvisionById(id) {
		try {
			const result = await db.query(
				'SELECT * FROM provision_services WHERE id = $1;',
				[id]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createProvision(
		id_service,
		count,
		id_guest,
		result_price,
		date,
		id_employess
	) {
		try {
			const result = await db.query(
				'INSERT INTO provision_services(id_service, count, id_guest, result_price, date, id_employess) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',
				[id_service, count, id_guest, result_price, date, id_employess]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateProvision(
		id,
		id_service,
		count,
		id_guest,
		result_price,
		date,
		id_employess
	) {
		try {
			const result = await db.query(
				'UPDATE provision_services SET id_service = $2, count = $3, id_guest = $4, result_price = $5, date = $6, id_employess = $7 WHERE id=$1 RETURNING *;',
				[id, id_service, count, id_guest, result_price, date, id_employess]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteProvision(id) {
		try {
			await db.query('DELETE FROM provision_services WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = ProvisionsModels
