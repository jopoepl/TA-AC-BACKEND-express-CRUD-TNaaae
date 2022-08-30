var express = require(`express`)
var mongoose = require(`mongoose`)
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {type: String, required: true},
    email: String,
    age: Number,
    bio: String
})


module.exports = mongoose.model(`User`, userSchema)