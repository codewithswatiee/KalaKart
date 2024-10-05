const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  artisan: { type: Schema.Types.ObjectId, ref: 'Artisan', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
  stock: { type: Number, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  ratings: [{
    buyer: { type: Schema.Types.ObjectId, ref: 'Buyer' },
    rating: { type: Number, min: 1, max: 5 },
    review: { type: String }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
