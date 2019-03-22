define(function(require, exports, module) {
  function helloSea() {
    var div = document.createElement('div')
    div.id = 'one'
    div.innerText = 'Hello sea.js'
    document.getElementsByTagName('body')[0].appendChild(div)
  }
  
  exports.helloSea = helloSea
})