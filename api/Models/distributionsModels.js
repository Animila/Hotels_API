const { db } = require('../config/database')
const DistributionModels = {
	async getAllDistributions() {
		try {
			const result = await db.query('SELECT * FROM distributions;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getDistributionById(id) {
		try {
			const result = await db.query(
				'SELECT * FROM distributions WHERE id = $1;',
				[id]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createDistribution(id_rooms, id_guests) {
		try {
			const result = await db.query(
				'INSERT INTO distributions(id_rooms, id_guests) VALUES ($1, $2) RETURNING *;',
				[id_rooms, id_guests]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateDistribution(id, id_rooms, id_guests) {
		try {
			const result = await db.query(
				'UPDATE distributions SET id_rooms = $2, id_guests=$3 WHERE id=$1 RETURNING *;',
				[id, id_rooms, id_guests]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteDistribution(id) {
		try {
			await db.query('DELETE FROM distributions WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = DistributionModels
