const Class = require('../model/Class')

module.exports = {
  index: function(req, res) {
    Class.find().then(function(rows) {
      res.send(rows)
    })
  },

  show: function(req, res) {
    Class.findById(req.params.id).then(function(row) {
      res.send(row)
    })
  },

  store: function(req, res) {
    Class.create(req.body).then(function(row) {
      res.send(row)
    })
  },

  update: function(req, res) {
    Class.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.send(row)
    })
  },

  destroy: function(req, res) {
    Class.findOneAndDelete({ _id: req.params.id }).then(function(row) {
      res.send(row)
    })
  }
}
