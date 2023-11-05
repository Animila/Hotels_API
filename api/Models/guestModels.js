const { db } = require('../config/database')
const GuestModals = {
	async getAllGuest() {
		try {
			const result = await db.query('SELECT * FROM guests;')
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getGuestById(user_id) {
		try {
			const result = await db.query('SELECT * FROM guests WHERE id = $1;', [
				user_id,
			])
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createGuest(
		first_name,
		last_name,
		third_name,
		address,
		sex,
		birthday,
		start_date,
		end_date
	) {
		try {
			const result = await db.query(
				'INSERT INTO guests(first_name, last_name, third_name, address, sex, birthday, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
				[
					first_name,
					last_name,
					third_name,
					address,
					sex,
					birthday,
					start_date,
					end_date,
				]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async updateGuest(
		first_name,
		last_name,
		third_name,
		address,
		sex,
		birthday,
		start_date,
		end_date
	) {
		try {
			const result = await db.query(
				'UPDATE guests SET first_name = $2, last_name = $3, third_name = $4, address = $5, sex = $6, birthday = $7, start_date = $8, end_date = $9 WHERE id=$1 RETURNING *;',
				[
					id,
					first_name,
					last_name,
					third_name,
					address,
					sex,
					birthday,
					start_date,
					end_date,
				]
			)
			return { success: true, data: result.rows }
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async deleteGuest(id) {
		try {
			await db.query('DELETE FROM guests WHERE id=$1;', [id])
			return { success: true }
		} catch (error) {
			return { success: false, message: error }
		}
	},
}

module.exports = GuestModals
