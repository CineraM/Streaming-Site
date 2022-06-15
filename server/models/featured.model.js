const mongoose = require('mongoose')

const Featured = new mongoose.Schema(
	{
		genre: { type: String, required: true, unique: true},
        id: { type: String, required: true, unique: true},
	},
	{ collection: 'featured' }
)

const model = mongoose.model('FeaturedData', Featured)

module.exports = model