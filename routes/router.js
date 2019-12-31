import express from 'express'

const router = express.Router()

router.use('/api', require('./get'))
router.use('/api', require('./post'))
router.use('/api', require('./put'))

router.use('/api/image', require('./image'))

router.get('/health', (req, res) => {
	res.send('ok')
})

module.exports = router