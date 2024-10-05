const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtisanSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  earnings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Artisan', ArtisanSchema);
