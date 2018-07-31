const express = require('express')
const mongoose = require('mongoose')
// const User = require('./models/user')
const routes = require('./routes')

const app = express()
routes(app)

// app.get('/user', (req, res) => {
//     User.findUserByName('alex', (err, user) => {
//         res.json(user)
//     })
// })

const port = 8080
const startServer = () => {
    app.listen(port, () => console.log(`App start on port ${port}`)) // => use callback
}

// => connection mongoose
const connectDb = () => {
    mongoose.Promise = require('bluebird')

    const options = {
        useNewUrlParser: true
    }

    mongoose.connect('mongodb://localhost:27017/testmongoose', options)
    return mongoose.connection
}

// => connect mongoose
connectDb ()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)