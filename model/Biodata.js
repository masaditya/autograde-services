const mongoose = require('mongoose')

const biodataSchema = mongoose.Schema({
  nama: String,
  alamat: String
})

module.exports = mongoose.model('Biodata', biodataSchema)
