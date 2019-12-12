import express from 'express'
import bodyParser from 'body-parser'
const person = require('../models/person')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/create', (req, res) => {
	var result = new person({
		name: req.body.name,
		age: req.body.age,
		cpf: req.body.cpf
	})

	result.save((err) => {
		if (err) res.status(500).send('Could not save object to DB')
		else res.send('Object created succesfully')
	})
})

module.exports = router