const orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order_date: { type: Date, default: Date.now },
    total_amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], required: true },
    payment_status: { type: String, enum: ['unpaid', 'paid', 'refunded'], required: true },
    delivery_address: String,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Order', orderSchema);
  