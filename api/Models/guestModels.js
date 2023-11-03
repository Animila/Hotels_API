const { db } = require('../config/database')
const GuestModals = {
	async getGuestById(user_id) {
		try {
			const result = await db.query('SELECT * FROM guests WHERE id = $1;', [
				user_id,
			])

			if (result.rows.length >= 0) {
				return { success: true, data: result.rows }
			} else {
				return { success: true, data: [] }
			}
		} catch (error) {
			return { success: false, message: error }
		}
	},
}
module.exports = GuestModals
