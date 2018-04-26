//
// server.js
//
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Person = require('./domain/Person')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

let personlist = []

app.get('/api/person', (req, res, next) => {
	console.log("get was called!")

	const person = new Person("Arantxio", "Gottmers")

	res.status(200)
	res.json(personlist)
	res.end()
})

app.post('/api/person', (req, res, next) => {
	console.log("Post was called!")

	const firstname = req.body.firstname
	const lastname = req.body.lastname

	const person = new Person(firstname, lastname)
	personlist.push(person)
	res.status(200).json(person).end()
})

app.use('*', (req, res, next) => {
	let httpmethod = req.method
	let requesturl = req.baseUrl
	console.log("We recieved a " + httpmethod + " request on url " + requesturl)

	const error = {
		error: "Endpoint does not exist",
		url: requesturl
	}

	res.status(404),json(error).end()
})

app.use((err, req, res, next) => {
	console.log('Final error handler: an error occured')
	console.loh(err)

	const error = {
		error: "Server error"
	}

	res.status(500), json(error).end()
})

app.listen(port, () => {
	console.log('Example app listening on port ' + port + '!')
})