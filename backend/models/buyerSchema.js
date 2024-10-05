const mongoose = require('mongoose');
const { Schema } = mongoose;

const BuyerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { 
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String }
  },
  orderHistory: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  browsingHistory: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Buyer', BuyerSchema);
