const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    validate: {
        validator: validator.isEmail,
        message: 'Invalid email address'
    }  
},
  password: { type: String, required: true, validate: {
    validator: function (password) {
      const minLength = 8;
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
      return password.length >= minLength && specialCharPattern.test(password);
    },
    message: 'Password must be at least 8 characters long and contain at least one special character',
    }, 
},
  role: { 
    type: String, enum: ['artisan', 'buyer'], 
    required: true },
  address: {
    type: String
},
  city: {
    type: String
},
  state: {
    type: String
},
  country: {
    type: String
},
  phone_number:{
    type: Number
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
