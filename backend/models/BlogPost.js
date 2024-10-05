const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: String,
  image_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
