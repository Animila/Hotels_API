const { db } = require('../config/database')
const RoomsModels = {
	async getAllRooms() {
		try {
			const result = await db.query('SELECT * FROM rooms;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getRoomsById(id) {
		try {
			const result = await db.query('SELECT * FROM rooms WHERE id = $1;', [id])
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getPercentFree() {
		try {
			const sql =
				'SELECT ROUND((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM rooms), 2) AS occupancy_percentage FROM distributions'
			const result = await db.query(sql)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createRooms(count_person, id_type, price, id_employee) {
		try {
			const result = await db.query(
				'INSERT INTO rooms(count_person, id_type, price, id_employess) VALUES ($1, $2, $3, $4) RETURNING *;',
				[count_person, id_type, price, id_employee]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateRooms(id, count_person, id_type, price, id_employee) {
		try {
			const result = await db.query(
				'UPDATE rooms SET count_person = $2, id_type = $3, price = $4, id_employess = $5 WHERE id=$1 RETURNING *;',
				[id, count_person, id_type, price, id_employee]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteRooms(id) {
		try {
			await db.query('DELETE FROM rooms WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = RoomsModels
