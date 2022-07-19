const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stack =new Schema({
    value:Number
})

module.exports = mongoose.model('stack', Stack)


