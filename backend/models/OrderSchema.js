const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'Buyer', required: true },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  paymentStatus: { type: String, enum: ['Paid', 'Pending', 'Failed'], default: 'Pending' },
  placedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
