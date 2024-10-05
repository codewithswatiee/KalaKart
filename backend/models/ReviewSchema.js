const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review_text: String,
    review_date: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Review', reviewSchema);
  