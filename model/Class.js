const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  class: String,
  code: String,
  teacher: String,
  matkul: String,
  student: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Class", classSchema);
