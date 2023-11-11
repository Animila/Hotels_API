const { db } = require('../config/database')
const UserModels = {
	async getAll() {
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
	},
	async checkLogin(login) {
		try {
			const result = await db.query(
				'SELECT COUNT(*) FROM users WHERE login = $1;',
				[login]
			)
			if (result.rows.length >= 0) {
				return { success: true, data: result.rows }
			} else {
				return { success: true, data: [] }
			}
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async checkIdPerson(id_person) {
		try {
			const result = await db.query(
				'SELECT COUNT(*) FROM users WHERE id_person = $1;',
				[id_person]
			)
			if (result.rows.length >= 0) {
				return { success: true, data: result.rows }
			} else {
				return { success: true, data: [] }
			}
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async getUserById(user_id) {
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
	},
	async loginAuth(login, password) {
		console.log(login, password)
		try {
			const result = await db.query(
				'SELECT * FROM users WHERE login = $1 AND password = $2;',
				[login, password]
			)

			if (result.rows.length >= 0) {
				return { success: true, data: result.rows }
			} else {
				return { success: true, data: [] }
			}
		} catch (error) {
			return { success: false, message: error }
		}
	},
	async createUser(login, password, type, id_person) {
		console.log(login, password, type, id_person)
		try {
			const userResult = await db.query(
				'INSERT INTO users (type,  login, password, id_person) VALUES ($1, $2, $3, $4) RETURNING *;',
				[type, login, password, id_person]
			)
			console.log(userResult)
			return { success: true, data: userResult.rows[0] }
		} catch (error) {
			console.log(error)
			return { success: false, message: error }
		}
	},
	async updateUser(id, login, password) {
		try {
			var userResult
			if (password) {
				userResult = await db.query(
					'UPDATE users SET login=$1, password=$2 WHERE id=$3 RETURNING *;',
					[login, password, id]
				)
			} else {
				userResult = await db.query(
					'UPDATE users SET login=$1 WHERE id=$2 RETURNING *;',
					[login, id]
				)
			}
			console.log(userResult)
			return { success: true, data: userResult.rows[0] }
		} catch (error) {
			console.log(error)
			return { success: false, message: error }
		}
	},
	async deleteUser(id) {
		try {
			const result = db.query('DELETE FROM users WHERE id=$1;', [id])
			console.log(result)
			return { success: true }
		} catch (error) {
			console.log(error)
			return { success: false, message: error }
		}
	},
}
module.exports = UserModels
