define(function (require, exports, module) {
  let calculateSquare = document.getElementById('calculate-square')
  let result = calculateSquare.addEventListener('click', () => {
    let num = document.getElementById('square-value').value
    if (num) {
      let result = require('./square.js').square(num)
      document.getElementById('square-result').value = result
    }

  })
});