const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, lowercase: true, trim: true },
  password: { type: String }
})

const User = mongoose.model('User', userSchema)

module.exports = User
