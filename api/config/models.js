const Position = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		title: { type: 'string' },
	},
}

const Schedule = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		employee_id: { type: 'number' },
		id_day_of_week: { type: 'string' },
		start_time: { type: 'string' },
		end_time: { type: 'string' },
	},
}

const Room = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		count_person: { type: 'number' },
		id_type: { type: 'number' },
		price: { type: 'number' },
		id_employee: { type: 'number' },
	},
}

const Service = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		title: { type: 'string' },
		price: { type: 'number' },
	},
}

const Distribution = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		id_rooms: { type: 'number' },
		id_guests: { type: 'number' },
	},
}

const Guest = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		first_name: { type: 'string' },
		last_name: { type: 'string' },
		third_name: { type: 'string' },
		address: { type: 'string' },
		sex: { type: 'integer' },
		birthday: { type: 'string' },
		start_date: { type: 'string' },
		end_date: { type: 'string' },
	},
}

const Employee = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		first_name: { type: 'string' },
		last_name: { type: 'string' },
		third_name: { type: 'string' },
		address: { type: 'string' },
		telephone: { type: 'string' },
		position: Position,
	},
}

const User = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		login: { type: 'string' },
		typeUser: { type: 'string' },
		account: {
			id: { type: 'number' },
			first_name: { type: 'string' },
			last_name: { type: 'string' },
			third_name: { type: 'string' },
			address: { type: 'string' },
			sex: { type: 'integer' },
			birthday: { type: 'string' },
			start_date: { type: 'string' },
			end_date: { type: 'string' },
			telephone: { type: 'string' },
			position: Position,
		},
	},
}

module.exports = {
	User,
	Service,
	Position,
	Employee,
	Guest,
	Schedule,
	Room,
	Distribution,
}
