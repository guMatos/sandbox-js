import express from 'express'
import bodyParser from 'body-parser'
const Image = require('../models/Image')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/send', (req, res) => {
	var image = new Image({
		base64: req.body.base64
	})

	res.send(image)
})

module.exports = router