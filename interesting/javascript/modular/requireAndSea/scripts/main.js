require.config({
  paths: {
    "jquery": '../lib/jquery-3.3.1',
    "one": 'one',
    "two": 'two'
  }
})

require(['one', 'two'], function(one, two) {
  one.helloRequire()
  two.helloJQuery()
})