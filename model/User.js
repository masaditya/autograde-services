const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  username: String,
  name: String,
  email: String,
  class: String,
  role: String,
});

module.exports = mongoose.model("User", userSchema);
