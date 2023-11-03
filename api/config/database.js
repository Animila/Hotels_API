const dotenv = require('dotenv')
dotenv.config()

const { Pool } = require('pg')

// Создание подключения к базе данных Postgres
const db = new Pool({
	port: process.env.DEV_PG_DB_PORT,
	host: process.env.DEV_PG_DB_HOST,
	user: process.env.DEV_PG_DB_USER,
	password: process.env.DEV_PG_DB_PASS,
	database: process.env.DEV_PG_DATABASE,
	connectionLimit: 10, // проверить
	multipleStatements: false,
})

db.on('error', error => {
	console.error('База данных не подключена:', error.message)
})

db.once('open', () => {
	console.log('БД подключена')
})

module.exports = { db }
