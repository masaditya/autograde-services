const Assignment = require("../model/Assignment");
const User = require("../model/User");
const Repo = require("../model/Repo");
const mongoose = require("mongoose");

module.exports = {
  index: function (req, res) {
    Assignment.find().then(function (rows) {
      res.send(rows);
    });
  },

  show: function (req, res) {
    Assignment.find({ id: req.params.id }).then(function (row) {
      console.log(row);
      res.send(row);
    });
  },

  getbydosen: function (req, res) {
    Assignment.find({ code_dosen: req.params.code }).then(function (row) {
      res.send(row);
    });
  },

  store: async function (req, res) {
    let findUser = await User.findOne({ id: req.body.user.id }).exec();
    let checkExist = await Assignment.findOneAndUpdate(
      { repo_name: req.body.assignment.repo_name },
      {
        $set: {
          ...req.body,
          class: findUser.class || "",
        },
      },
      { new: true, upsert: true, returnOriginal: false }
    );
    Repo.findOneAndUpdate(
      {
        repo: parseRepo(req.body.assignment.repo_name),
      },
      {
        $set: {
          repo: parseRepo(req.body.assignment.repo_name),
        },
      },
      { new: true, upsert: true, returnOriginal: false }
    );
    res.send(checkExist);
  },

  //   update: function (req, res) {
  //     Assignment.findOneAndUpdate(
  //       { _id: req.params.id },
  //       { $set: req.body },
  //       { new: true }
  //     ).then(function (row) {
  //       res.send(row);
  //     });
  //   },

  //   destroy: function (req, res) {
  //     Assignment.findOneAndDelete({ _id: req.params.id }).then(function (row) {
  //       res.send(row);
  //     });
  //   },
};

function parseRepo(repo) {
  let b = repo.split("-");
  b.pop();
  let c = b.join("-");
  return c;
}
