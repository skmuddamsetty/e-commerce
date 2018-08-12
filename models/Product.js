const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('products',ProductSchema);
