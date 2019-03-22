var firstName = 'deng'
var lastName = 'xianxiao'
var age = 24
function multiply(x, y) {
  return x * y
}

export {
  firstName,
  lastName,
  age,
  age as myAge,
  multiply
}

export default function foo() {
  console.log('foo')
}