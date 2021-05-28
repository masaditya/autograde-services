const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  class: String,
  matkul: String,
});

module.exports = mongoose.model("Class", classSchema);
