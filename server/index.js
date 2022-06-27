/*

stuff to add to server branch:

yarn add express
yarn add nodemon
yarn add cors
yarn add mongoose
yarn add jsonwebtoken
yarn add bcryptjs

How to run server:
    "yarn run"
    input "dev"

    or "yarn dev"
*/
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Anime = require('./models/anime.model')
const Featured = require('./models/featured.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ani-fox-db')

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({
			 status: 'ok', 
			 user: token, 
			 email: user.name 
			}) // query the db, return the items you need
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.post('/api/anime', async (req, res) => {

	Anime.findOne({ id: req.body.aniId })
	.then((result) => {
		res.send(result)
	})
	.catch((err) => {
		console.log(err)
	})
})

app.post('/api/animeGenres', async (req, res) => {

	Anime.find({ genres: req.body.genre })
	.then((result) => {
		res.send(result)
	})
	.catch((err) => {
		console.log(err)
	})
})

app.get('/api/featured', function (req, res){
	
	Featured.find()
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})


app.post('/api/change_featured', async (req, res) => {
	const filter = {genres: req.body.genres}
	const update = {genres: req.body.genres, id: req.body.id, images: req.body.images, 
		links: req.body.links, synopsis: req.body.synopsis,  title: req.body.title }
	
	try {
		// console.log(update)
		await Featured.findOneAndUpdate(
			filter,
			update,
		)
		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})



// DELETE THIS DELETE THIS DELETE THIS DELETE THIS DELETE THIS DELETE THIS
app.get('/api/action', function (req, res){
	
	Anime.find({ genres: 'Action' })
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/api/drama', function (req, res){
	
	Anime.find({ genres: 'Drama' })
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/api/adventure', function (req, res){
	
	Anime.find({ genres: 'Adventure' })
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/api/comedy', function (req, res){
	
	Anime.find({ genres: 'Comedy' })
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/api/sports', function (req, res){
	
	Anime.find({ genres: 'Sports' })
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})


app.get('/api/movies', function (req, res){
	
	Anime.find({ genres: 'Avant Garde' })
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})
// DELETE THIS DELETE THIS DELETE THIS DELETE THIS DELETE THIS DELETE THIS

app.listen(1337, () => {
	console.log('Server started on 1337')
})

