var express = require('express')
var app = express()

app.all('*', function(req, res, next) {
  res.cookie('myCookie', 'server-cookie', {maxAge: 3000})
  next()
})

app.use(express.static('src'))

var server = app.listen(3003, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Example server listening at http://localhost:%s', port)
})