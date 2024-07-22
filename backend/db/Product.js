const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    company: String,
    price: String,
    category: String,
    userId: String
})

module.exports = model('products', ProductSchema)