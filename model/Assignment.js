const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  id: Number,
  name: String,
  username: String,
  avatar: String,
  repo_url: String,
  repo_name: String,
  week: Number,
  class: String,
  last_push: String,
  correct: Number,
  incorrect: Number,
  code_dosen: String,
  detail: [{ type: String }],
});

module.exports = mongoose.model("Assignment", assignmentSchema);
