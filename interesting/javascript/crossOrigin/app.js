var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.use(express.static('public1'))

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Example server listening at http://localhost:%s', port)
})