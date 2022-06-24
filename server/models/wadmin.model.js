const mongoose = require('mongoose')

const Wadmin = new mongoose.Schema(
	{
		adminID: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ collection: 'web-admin' }
)

const model = mongoose.model('UserData', Wadmin)

module.exports = model