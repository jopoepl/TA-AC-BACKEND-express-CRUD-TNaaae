var mongoose = require(`mongoose`)
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    age: Number,
    email: String
})

module.exports = mongoose.model(`User`, userSchema)