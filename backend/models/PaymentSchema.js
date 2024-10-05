const paymentSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    payment_date: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    payment_method: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    payment_status: { type: String, enum: ['pending', 'completed', 'failed'], required: true }
  });
  
  module.exports = mongoose.model('Payment', paymentSchema);
  