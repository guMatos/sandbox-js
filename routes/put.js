import express from 'express'
import bodyParser from 'body-parser'
const Person = require('../models/person')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.put('/update', (req, res) => {
	var filter = { cpf: req.body.cpf }
	var update = {
		name: req.body.person.name,
		cpf: req.body.person.cpf,
		age: req.body.person.age
	}

	Person.findOneAndUpdate(filter, update, { runValidators: true }, (err, doc) => {
		if (err) return res.status(500).send({error: err})
		if (!doc) return res.status(404).send('Person with cpf "' + filter.cpf + '" not found')
		return res.send('Record successfully updated')
	})
})

module.exports = router