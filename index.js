const mongoose = require('mongoose')
const User = require('./models/user')
mongoose.Promise = require('bluebird')

// mongoose.connect('mongodb://localhost/testmongoose', {
//     useMongoClient: true
// })
mongoose.connect('mongodb://localhost:27017/testmongoose', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', err => {
    console.log('error connection', err)
})

db.once('open', () => {
    // console.log('we are connected')
    // User.findById('5b6012d2c80cd71a94e9bc60', (err, user) => {
    //     console.log('result', err, user)
    // })
    // const user = new User ({name: 'Alex'})
    // console.log('user', user)
    // user.save((err, createdUser) => {
    //     console.log('result', err, createdUser)
    // })

    // --------------------------------------
    // User.find({}, (err, users) => {
    //     console.log(err, users)
    // })

    // const user = new User({name: 'Bill', country: 'US'})
    // user.save()

    User.findUserByName('alex', (err, user) => {
        console.log(err, user)

        // User.find({country: user.country}, (err, users) => {
        //     console.log('users', users)
        // })

        // user.country = 'US'
        // user.save((err, savedUser) => {
        //     console.log('save', err, savedUser)
        // })

        user.findSimilarUsersByCountry((err, users) => {
            console.log(err, users)
        }) 
    })
})