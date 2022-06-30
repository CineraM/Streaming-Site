const mongoose = require('mongoose')

const Wadmin = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ collection: 'web-admin' }
)

const model = mongoose.model('AdminData', Wadmin)

module.exports = model