import express from 'express'

const router = express.Router()

router.use('/api', require('./get'))
router.use('/api', require('./post'))

router.get('/health', (req, res) => {
	res.send('ok')
})

module.exports = router