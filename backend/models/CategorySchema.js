const categorySchema = new mongoose.Schema({
    category_name: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
  });
  
mongoose.model('Category', categorySchema);
  