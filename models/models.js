const mongoose = require('mongoose')

const userSchma = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const userCollection = new mongoose.model('user',userSchma)
module.exports = userCollection