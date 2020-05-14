const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    department: { type: String, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true }
  },
  { timestamps: true }
)

  module.exports = mongoose.model('products', Product)