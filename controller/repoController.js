const Repo = require("../model/Repo");
const mongoose = require("mongoose");

module.exports = {
  index: function (req, res) {
    Repo.find().then(function (rows) {
      res.send(rows);
    });
  },

  show: function (req, res) {
    Repo.find({ code_dosen: req.params.id }).then(function (row) {
      res.send(row);
    });
  },

  store: function (req, res) {
    Repo.create({ ...req.body, _id: new mongoose.Types.ObjectId() }).then(
      function (row) {
        res.send(row);
      }
    );
  },

  update: function (req, res) {
    Repo.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(function (row) {
      res.send(row);
    });
  },

  destroy: function (req, res) {
    Repo.findOneAndDelete({ id: req.params.id }).then(function (row) {
      res.send(row);
    });
  },
};
