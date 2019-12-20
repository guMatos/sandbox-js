import mongoose from 'mongoose'

var personSchema = new mongoose.Schema({
	name: { type: String, required: true, maxlength: 100, minlength: 1 },
	age: { type: Number, required: true, max: 1000 },
	cpf: { type: String, required: true, maxlength: 11, minlength: 11, unique: true, dropDups: true }
})

module.exports = mongoose.model('Person', personSchema)