const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
 {
  username: { type: String, required: true },
  email: { type: String, required: true },
  password_digest: { type: String, required: true },
  admin_key: { type: Boolean, require: true }
 },
 { timestamps: true }
)

module.exports = mongoose.model('users', User)