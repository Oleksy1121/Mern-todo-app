const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Cors = require('cors')


// env 
dotenv.config()

// app config
app = express()
app.use(express.json())
app.use(Cors())

// connection setup
PORT = process.env.PORT
baseURL = process.env.MONGO_URL

// db connection
mongoose
    .connect(baseURL)
    .then(app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`)
    }))
    .catch((err) => {
        console.log(err)
    })