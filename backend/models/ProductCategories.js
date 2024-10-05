const productCategorySchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    created_at: { type: Date, default: Date.now }
  });
  
mongoose.model('ProductCategory', productCategorySchema);
  