require(['cubic'],function(cubic) {
  console.log(cubic.cubic)
  let calculateCubic = document.getElementById('calculate-cubic')
  let result = calculateCubic.addEventListener('click', () => {
    let num = document.getElementById('cubic-value').value
    if (num) {
      let result = cubic.cubic(num)
      document.getElementById('cubic-result').value = result
    }

  })
})
