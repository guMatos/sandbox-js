import express from 'express'
import bodyParser from 'body-parser'
const Person = require('../models/person')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/create', (req, res) => {
	var result = new Person({
		name: req.body.name,
		age: req.body.age,
		cpf: req.body.cpf
	})

	result.save((err) => {
		if (err) return res.status(500).send({error: err})
		return res.send('Object created succesfully')
	})
})

module.exports = router