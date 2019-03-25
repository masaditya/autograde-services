const express = require('express')
const app = express()
var methodOverride = require('method-override')
const path = require('path')

require('./config/db')

// Using pug template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// include router
const biodataRouter = require('./routes/biodataRouter')

// routing
app.use('/biodata', biodataRouter)

// starting server
app.listen(3000, function() {
  console.log('server listening on port 3000')
})
