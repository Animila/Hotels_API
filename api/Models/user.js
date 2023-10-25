const { db } = require('./database')

const getAllUsers = async () => {
	try {
		const result = await db.query('SELECT * FROM users;')
		if (result.rows.length >= 0) {
			return { success: true, data: result.rows }
		} else {
			return { success: true, data: [] }
		}
	} catch (error) {
		return { success: false, message: error }
	}
}

const getUserById = async user_id => {
	try {
		const result = await db.query('SELECT * FROM users WHERE id = $1;', [
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
}

const getGuestById = async user_id => {
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
}

const getEmployeeById = async user_id => {
	try {
		const result = await db.query('SELECT * FROM employess WHERE id = $1;', [
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
}

module.exports = {
	getAllUsers,
	getUserById,
	getGuestById,
	getEmployeeById,
}
