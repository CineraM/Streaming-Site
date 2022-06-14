const mongoose = require('mongoose')

const Anime = new mongoose.Schema(
	{
		id: { type: String, required: true, unique: true},
		links: { type: Array, required: true,  },
		title: { type: String, required: true },
        synopsis: { type: String, required: true },
        year: { type: Number, required: true },
        season: { type: String, required: true },
        studios: { type: String, required: true },
        genres: { type: String, required: true },
        rank: { type: Number, required: true },
        images: { type: String, required: true },
        rating: { type: String, required: true },
	},
	{ collection: 'anime' }
)

const model = mongoose.model('AnimeData', Anime)

module.exports = model