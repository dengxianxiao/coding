// import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  this.alert('ahahahah')

  return element;
}

document.body.appendChild(component());