const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    title: String,
    desc: String,
    price: Number,
    img: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product