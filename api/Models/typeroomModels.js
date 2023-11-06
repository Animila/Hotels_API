const { db } = require('../config/database')
const TypeRoomModels = {
	async getAllTypeRooms() {
		try {
			const result = await db.query('SELECT * FROM typesroom;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getTypeRoomById(id) {
		try {
			const result = await db.query('SELECT * FROM typesroom WHERE id = $1;', [
				id,
			])
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createTypeRoom(title) {
		try {
			const result = await db.query(
				'INSERT INTO typesroom(title) VALUES ($1) RETURNING *;',
				[title]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateTypeRoom(id, title) {
		try {
			const result = await db.query(
				'UPDATE typesroom SET title = $2 WHERE id=$1 RETURNING *;',
				[id, title]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteTypeRoom(id) {
		try {
			await db.query('DELETE FROM typesroom WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = TypeRoomModels
