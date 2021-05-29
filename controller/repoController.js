const Repo = require('../model/Repo')

module.exports = {
  index: function(req, res) {
    Repo.find().then(function(rows) {
      res.send(rows)
    })
  },

  show: function(req, res) {
    Repo.findById(req.params.id).then(function(row) {
      res.send(row)
    })
  },

  store: function(req, res) {
    Repo.create(req.body).then(function(row) {
      res.send(row)
    })
  },

  update: function(req, res) {
    Repo.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.send(row)
    })
  },

  destroy: function(req, res) {
    Repo.findOneAndDelete({ _id: req.params.id }).then(function(row) {
      res.send(row)
    })
  }
}
