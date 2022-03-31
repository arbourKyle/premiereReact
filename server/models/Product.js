const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  short_desc: {
    type: String,
    required: true,
  },
  long_desc: {
    type: String,
    
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Product = model('Product', productSchema);

module.exports = Product;