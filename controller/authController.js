const Assignment = require("../model/Assignment");
const User = require("../model/User");
const Repo = require("../model/Repo");
const mongoose = require("mongoose");


module.exports = {
  //   index: function (req, res) {
  //     Assignment.find().then(function (rows) {
  //       res.send(rows);
  //     });
  //   },

  //   show: function (req, res) {
  //     Assignment.find({ id: req.params.id }).then(function (row) {
  //       res.send(row);
  //     });
  //   },

  store: async function (req, res) {
    let findUser = await User.findOne({ id: req.body.id }).exec();
    if (!findUser) {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        ...req.body,
        class: null,
        role: "student",
      });
      await newUser.save();
      res.send({
        ...newUser._doc,
        success: true,
        message: "Welcome New User! Join Class to complete registration",
      });
    } else {
      res.send({
        ...findUser._doc,
        success: true,
        message: "Login Success, Hello There!",
      });
    }
  },

  update: function (req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { class: req.body.class } },
      { new: true, upsert: true, returnOriginal: false }
    ).then(function (row) {
      res.send(row);
    });
  },

  //   destroy: function (req, res) {
  //     Assignment.findOneAndDelete({ _id: req.params.id }).then(function (row) {
  //       res.send(row);
  //     });
  //   },
};
