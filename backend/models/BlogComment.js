const blogCommentSchema = new mongoose.Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment_text: String,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('BlogComment', blogCommentSchema);
  