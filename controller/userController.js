const Assignment = require("../model/Assignment");
const User = require("../model/User");
const Repo = require("../model/Repo");
const mongoose = require("mongoose");
const Class = require("../model/Class");

module.exports = {
  index: function (req, res) {
    User.find()
      .populate("kelas")
      .populate("tugas")
      .then(function (rows) {
        res.send(rows);
      });
  },

  show: function (req, res) {
    Assignment.find({ id: req.params.id }).then(function (row) {
      res.send(row);
    });
  },

  // showUserClass: function (req, res) {
  //   User.find({ id: req.body.id }).then(function (row) {
  //     res.send(row);
  //   });
  // },

  store: async function (req, res) {
    let findUser = await User.findOne({ id: req.body.id })
      .populate("kelas")
      .exec();
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

  update: async function (req, res) {
    Class.findOneAndUpdate(
      { _id: req.body.kelas._id },
      { $push: { student: req.body.student } },
      { new: true, useFindAndModify: false }
    ).then(() => {
      User.findOneAndUpdate(
        { _id: req.body.student._id },
        { $push: { kelas: req.body.kelas } },
        { new: true, useFindAndModify: false }
      ).then((row) => {
        res.send(row);
      });
    });
  },

  setCode: function (req, res) {
    User.findOneAndUpdate(
      { id: req.params.id },
      { $set: { code_dosen: req.body.code_dosen } },
      { new: true, useFindAndModify: false }
    ).then((row) => {
      res.send(row);
    });
  },

  setRole: function (req, res) {
    User.findOneAndUpdate(
      { id: req.body.id },
      { $set: { role: req.body.role } },
      {
        new: true,
        upsert: true,
        returnOriginal: false,
        useFindAndModify: false,
      }
    ).then(function (row) {
      res.send(row);
    });
  },

  destroy: async function (req, res) {
    // Assignment.findOneAndDelete({ _id: req.params.id }).then(function (row) {
    //   res.send(row);
    // });
    console.log(req.body);
    await Class.findOneAndUpdate(
      { _id: req.body.kelas._id },
      { $pull: { student: req.body.student._id } },
      { useFindAndModify: false, new: true }
    );
    await User.findOneAndUpdate(
      { _id: req.body.student._id },
      { $pull: { kelas: req.body.kelas._id } },
      { useFindAndModify: false, new: true }
    ).then(function (row) {
      res.send(row);
    });
  },
};
