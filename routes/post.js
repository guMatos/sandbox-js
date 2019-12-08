import express from 'express'
const person = require('../models/person')

const router = express.Router()

router.post('/create', (req, res) => {
	var result = new person({
		name: req.body.name,
		age: req.body.age,
		cpf: req.body.cpf
	})

	result.save((err) => {
		if (err) res.send('Could not save object to DB')
		else { res.send('Object created succesfully') }
	})
})

module.exports = router