const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age:Number,
    password:String,
});

module.exports = model("users", userSchema);
