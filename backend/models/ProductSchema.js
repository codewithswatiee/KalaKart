const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  artisan: { type: Schema.Types.ObjectId, ref: 'Artisan', required: true }, // Reference to the Artisan model
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  images: [{ type: String }], // Array of image URLs for multiple images
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // Reference to Category model for multiple categories
  ratings: [{
    buyer: { type: Schema.Types.ObjectId, ref: 'Buyer' }, // Reference to the Buyer model
    rating: { type: Number, min: 1, max: 5 },
    review: { type: String }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);