const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  username: String,
  name: String,
  code_dosen : String,
  email: String,
  role: String,
  kelas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  tugas : [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }]
});

module.exports = mongoose.model("User", userSchema);
