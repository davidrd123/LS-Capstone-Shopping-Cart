const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type:String,
    required: true,
    trim: true
  },
  price: {
    type:Number,
    required: true,
  },
  quantity: {
    type:Number,
    required: true
  }

}, {timestamps: true})

ProductSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret
  }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;