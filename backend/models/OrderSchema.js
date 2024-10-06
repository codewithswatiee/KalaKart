// models/orderSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model (buyer)
    products: [{ 
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, // Reference to the Product model
        quantity: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'completed', 'cancelled'], 
        default: 'pending' 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update the updatedAt field before saving
OrderSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Order', OrderSchema);
