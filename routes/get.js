import express from 'express'
const Person = require('../models/Person')

const router = express.Router()

router.get('/get', (req, res) => {
	res.send('api get')
})

router.get('/search/:cpf', (req, res) => {
	var cpf = req.params.cpf

	Person.findOne({"cpf": cpf}).then(e => {
		if (!e) return res.status(404).send('Person with cpf "' + cpf + '" not found')
		return res.send(e)
	})
})

module.exports = router