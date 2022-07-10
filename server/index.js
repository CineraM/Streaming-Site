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
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Anime = require('./models/anime.model')
const Featured = require('./models/featured.model')
const Admin = require('./models/wadmin.model')
const Likes = require('./models/likes.model')

const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require("dotenv").config();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ani-fox-db')


app.post('/api/register_admin', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await Admin.create({
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})


app.post('/api/like', async (req, res) => {
	// console.log(req.body)
	try {
		await Likes.create({
			like_id: req.body.user + req.body.anime ,
			user: req.body.user,
			anime: req.body.anime,
			genres: req.body.genres,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		// console.log(err)
		res.json({ status: 'error', error: err })
	}
})

app.post('/api/remove_like', async (req, res) => {
	// console.log(req.body)
	try {
		await Likes.findOneAndDelete({
			like_id: req.body.user + req.body.anime,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		console.log(err)
		res.json({ status: 'error', error: err })
	}
})

app.post('/api/find_user_like', async (req, res) => {
	Likes.find({ like_id: req.body.user + req.body.anime,})
	.then((result) => {
		console.log(req.body.user)
		if(result.length>0)
		{
			res.send(true)
		}
		else
		{
			res.send(false)
		}
	})
	.catch((err) => {
		console.log(err)
	})
})


app.post('/api/get_anime_likes', async (req, res) => {
	// console.log(req.body)
	Likes.find({ anime: req.body.id,})
	.then((result) => {
		res.send(result)
	})
	.catch((err) => {
		console.log(err)
	})
})

app.post('/api/get_user_likes_genre', async (req, res) => {
	
	Likes.find({ user: req.body.user,})
	.then((result) => {

		var freq = {}
		var genre = "Action"
		for (var i = 0; i < result.length; i++)
		{
			if (freq[result[i]['genres']]) {
				freq[result[i]['genres']] += 1;
			} else {
				freq[result[i]['genres']]= 1;
			}
		}

		if(result.length>0)
		{
			// Get max key sorted by value
			genre = (Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b))
		}

		Anime.find({ genres: genre })
		.then((usrList) => {
			res.send(usrList)
		})
		.catch((err) => { console.log(err) })
	})
	.catch((err) => {
		console.log(err)
	})
})

app.post('/api/register', async (req, res) => {
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

	const admin_user = await Admin.findOne({
		email: req.body.email,
	})

	if (admin_user) {
		
		const isPasswordValid = await bcrypt.compare(
			req.body.password,
			admin_user.password
		)
	
		if (isPasswordValid) {
			
			const admin_token = jwt.sign(
				{
					email: admin_user.email,
				},
				'secret1232'
			)
			return res.json({
				 status: 'ok', 
				 admin_user: admin_token, 
				 email: admin_user.name 
				}) // query the db, return the items you need
		}	
		else
		{
			console.log('invalid pass')
		}
	}
	else
	{
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
				 name: user.name,
				 email: user.email 
				}) // query the db, return the items you need
		} else {
			return res.json({ status: 'error', user: false })
		}
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


app.post('/api/change_password', async (req, res) => {

	const newPassword = await bcrypt.hash(req.body.password, 10)
	const filter = {email: req.body.email}
	const update = {
		name: req.body.name,
		email: req.body.email,
		password: newPassword, 
	}
	
	try {
		await User.findOneAndUpdate(
			filter,
			update,
		)
		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'successfull' })
	}
})


app.post('/api/change_featured', async (req, res) => {
	const filter = {genres: req.body.genres}
	const update = {genres: req.body.genres, id: req.body.id, 
		images: req.body.images, links: req.body.links, 
		synopsis: req.body.synopsis,  title: req.body.title }
	
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


app.listen(process.env.PORT || 1337, () => {
	console.log('Server started on 1337')
})

// app.listen(1337, () => {
// 	console.log('Server started on 1337')
// })
