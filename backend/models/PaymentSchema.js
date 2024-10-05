const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true }, // Reference to the Order model
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['Credit Card', 'Debit Card', 'PayPal', 'Wallet'], required: true }, // 'Wallet' should be in quotes
  transactionId: { type: String, required: true },
  status: { type: String, enum: ['Success', 'Failed', 'Pending'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);
