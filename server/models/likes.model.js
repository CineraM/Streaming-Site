const mongoose = require('mongoose')

const Likes = new mongoose.Schema(
	{
		like_id: { type: String, required: true, unique: true},
        user: { type: String, required: true},
		anime: { type: String, required: true},
		genres: { type: String, required: true},
	},
	{ collection: 'likes' }
)

const model = mongoose.model('LikesData', Likes)

module.exports = model