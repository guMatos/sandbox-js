import express from 'express'
const person = require('../models/person')

const router = express.Router()

router.get('/get', (req, res) => {
	res.send('api get')
})

router.get('/search/:cpf', (req, res) => {
	var cpf = req.params.cpf

	person.findOne({"cpf": cpf}).then(e => {
		if (!e) res.status(404).send('Person with cpf ' + cpf + ' not found')
		else res.send(e)
	})
})

module.exports = router