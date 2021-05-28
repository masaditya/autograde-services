const mongoose = require("mongoose");

const repoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  repo: String,
});

module.exports = mongoose.model("Repo", repoSchema);
