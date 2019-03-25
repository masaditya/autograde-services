const express = require('express')
const app = express()

require('./config/db')

// parsing body request
app.use(express.json())

// include router
const biodataRouter = require('./routes/biodataRouter')

// routing
app.use('/biodata', biodataRouter)

// starting server
app.listen(3000, function() {
  console.log('server listening on port 3000')
})
