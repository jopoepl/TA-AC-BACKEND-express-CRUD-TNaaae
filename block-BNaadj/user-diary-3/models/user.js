var mongoose = require(`mongoose`)
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: Number,
    address: String,
    bio: String, 
    hobbies: [String]
})

module.exports = mongoose.model(`User`, userSchema)