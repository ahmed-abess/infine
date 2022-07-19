const mongoose = require('mongoose')
const Schema = mongoose.Schema

const op =new Schema({
   name:String
})

module.exports = mongoose.model('Op', op)