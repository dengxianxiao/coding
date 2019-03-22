var express = require('express')
var app = express()

app.all('*', function(req, res, next) {
  // 设置可以跨域请求cors
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
  res.header("X-Request-With", "XMLHttpRequest")
  // 让options请求快速返回，处理cors非简单请求时使用
  if (req.method == 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})


app.use(express.static('public2'))

var server = app.listen(3001, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Example server listening at http://localhost:%s', port)
})