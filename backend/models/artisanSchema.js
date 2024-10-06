// models/artisanSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtisanSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }], // Reference to the Product model
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update the updatedAt field before saving
ArtisanSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Artisan', ArtisanSchema);
