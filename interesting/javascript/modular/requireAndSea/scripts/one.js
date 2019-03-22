define({
  helloRequire: function() {
    var div = document.createElement('div')
    div.id = 'one'
    div.setAttribute('data-name', 'one')
    div.innerText = 'Hello require.js'
    document.getElementsByTagName('body')[0].appendChild(div)
  }
})