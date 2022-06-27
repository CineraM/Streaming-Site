const mongoose = require('mongoose')

const Featured = new mongoose.Schema(
	{
		genres: { type: String, required: true, unique: true},
        id: { type: String, required: true, unique: true},
		images: { type: String, required: true},
		links: { type: String, required: true},
		synopsis: { type: String, required: true},
		title: { type: String, required: true},
	},
	{ collection: 'featured' }
)

const model = mongoose.model('FeaturedData', Featured)

module.exports = model