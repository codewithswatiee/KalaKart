const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogCommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'BlogPost', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comment_text: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogComment', blogCommentSchema);
