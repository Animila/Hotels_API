const Position = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		title: { type: 'string' },
		salary: { type: 'number' },
	},
}

const Schedule = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		id_employess: { type: 'number' },
		id_day_of_week: { type: 'string' },
		start_time: { type: 'string' },
		end_time: { type: 'string' },
	},
}

const Provision = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		id_service: { type: 'number' },
		count: { type: 'number' },
		id_guest: { type: 'number' },
		result_price: { type: 'number' },
		date: { type: 'string' },
		id_employess: { type: 'number' },
	},
}

const Room = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		count_person: { type: 'number' },
		id_type: { type: 'number' },
		price: { type: 'number' },
		id_employess: { type: 'number' },
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
		id_position: { type: 'number' },
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

const TypeRoom = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		title: { type: 'string' },
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
	Provision,
	TypeRoom,
}
