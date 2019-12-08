import mongoose from 'mongoose'
//const schema = mongoose.Schema()

var personSchema = new mongoose.Schema({
	name: { type: String, required: true, max: 100 },
	age: { type: Number, required: true, max: 1000 },
	cpf: { type: String, required: true, max: 11 }
})

module.exports = mongoose.model('person', personSchema)