const Position = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		title: { type: 'string' },
	},
}

const Services = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		title: { type: 'string' },
		price: { type: 'number' },
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
	Position,
	Employee,
	Guest,
}
