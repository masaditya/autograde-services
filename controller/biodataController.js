const Biodata = require('../model/Biodata')

module.exports = {
  index: function(req, res) {
    Biodata.find().then(function(rows) {
      res.render('biodata/index', { data: rows })
    })
  },

  create: function(req, res) {
    res.render('biodata/create')
  },

  store: function(req, res) {
    Biodata.create(req.body).then(function() {
      res.redirect('/biodata')
    })
  },

  edit: function(req, res) {
    Biodata.findById(req.params.id).then(function(row) {
      res.render('biodata/edit', { data: row })
    })
  },

  update: function(req, res) {
    Biodata.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(
      function() {
        res.redirect('/biodata')
      }
    )
  },

  destroy: function(req, res) {
    Biodata.findOneAndDelete({ _id: req.params.id }).then(function() {
      res.redirect('/biodata')
    })
  }
}
