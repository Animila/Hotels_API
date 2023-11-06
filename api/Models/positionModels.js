const { db } = require('../config/database')
const PositionModels = {
	async getAllPositions() {
		try {
			const result = await db.query('SELECT * FROM positions;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getPositionById(id) {
		try {
			const result = await db.query('SELECT * FROM positions WHERE id = $1;', [
				id,
			])
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createPosition(title, salary) {
		try {
			const result = await db.query(
				'INSERT INTO positions(title, salary) VALUES ($1, $2) RETURNING *;',
				[title, salary]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updatePosition(id, title, salary) {
		try {
			const result = await db.query(
				'UPDATE positions SET title = $2, salary=$3 WHERE id=$1 RETURNING *;',
				[id, title, salary]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deletePosition(id) {
		try {
			await db.query('DELETE FROM positions WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = PositionModels
