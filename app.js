import express from 'express'
import mongoose from 'mongoose'
require('dotenv').config({ path: 'development.env' })

const app = express()
const PORT = process.env.PORT
const MONGOURL = process.env.MONGOURL

app.use(require('./routes/router'))

mongoose.connect(MONGOURL)
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log('App is running at local port ' + PORT))

export default app