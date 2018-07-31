const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    country: String
})

userSchema.statics.findUserByName = function (name, cb) {
    return this.findOne({name: new RegExp(name, 'i')}, cb)
}

userSchema.methods.findSimilarUsersByCountry = function (cb) {
    // return this.model('User').find({country: this.country}, cb)
    return this.model('User')
        .where('country', this.country)
        .where('_id').ne(this._id)
        .exec(cb)
}

const User = mongoose.model('User', userSchema)

module.exports = User