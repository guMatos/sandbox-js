import mongoose from 'mongoose'

var personSchema = new mongoose.Schema({
	name: { type: String, required: true, max: 100 },
	age: { type: Number, required: true, max: 1000 },
	cpf: { type: String, required: true, max: 11, unique: true, dropDups: true }
})

module.exports = mongoose.model('person', personSchema)