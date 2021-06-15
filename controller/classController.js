const mongoose = require("mongoose");
const Class = require("../model/Class");
const User = require("../model/User");

module.exports = {
  index: function (req, res) {
    Class.find().then(function (rows) {
      res.send(rows);
    });
  },

  showbyteacher: function (req, res) {
    Class.find({ teacher: req.params.username })
      .populate({
        path: "student",
        populate: {
          path: "tugas",
          model: "User",
        },
      })
      .then(function (row) {
        res.send(row);
      });
  },

  show: function (req, res) {
    Class.findOne({ class: req.params.class })
      .populate({
        path: "student",
        populate: {
          path: "tugas",
          model: "User",
        },
      })
      .then(function (row) {
        res.send(row);
      });
  },

  store: function (req, res) {
    Class.create({ ...req.body, _id: new mongoose.Types.ObjectId() }).then(
      function (row) {
        res.send(row);
      }
    );
  },

  update: async function (req, res) {
    console.log(req.body);
    await Class.findOneAndUpdate(
      { _id: req.body.kelas._id },
      { $push: { student: req.body.student } },
      { useFindAndModify: false }
    );
    await User.findOneAndUpdate(
      { _id: req.body.student._id },
      { $push: { kelas: req.body.kelas } },
      { useFindAndModify: false }
    ).then(function (row) {
      res.send(row);
    });
  },

  destroy: function (req, res) {
    Class.findOneAndDelete({ _id: req.params.id }).then(function (row) {
      res.send(row);
    });
  },
};
