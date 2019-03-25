const Biodata = require('../model/Biodata')

module.exports = {
  index: function(req, res) {
    Biodata.find().then(function(rows) {
      res.send(rows)
    })
  },

  show: function(req, res) {
    Biodata.findById(req.params.id).then(function(row) {
      res.send(row)
    })
  },

  store: function(req, res) {
    Biodata.create(req.body).then(function(row) {
      res.send(row)
    })
  },

  update: function(req, res) {
    Biodata.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.send(row)
    })
  },

  destroy: function(req, res) {
    Biodata.findOneAndDelete({ _id: req.params.id }).then(function(row) {
      res.send(row)
    })
  }
}
