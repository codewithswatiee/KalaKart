const artisanSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: String,
    region: String,
    portfolio_url: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
mongoose.model('Artisan', artisanSchema);
  