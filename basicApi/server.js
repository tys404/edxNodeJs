const express = require('express')
const bodyParser = require('body-parser')
const quotes = require('./quotes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
require('./routes')(app);

var server = app.listen(port, function () {
 
   var host = server.address().address
   var port = server.address().port
  
   console.log("App listening at http://%s:%s", host, port)
  
 })