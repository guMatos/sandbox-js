import mongoose from 'mongoose'

var imageSchema = new mongoose.Schema({
	base64: { type: String, required: true, minlength: 1 }
})

module.exports = mongoose.model('Image', imageSchema)