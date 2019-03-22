// 定义一个父类
function Animal(name) {
  this.name = name
  this.sleep = function() {
    console.log(`${this.name}正在睡觉`)
  }
}
Animal.prototype.eat = function(food) {
  console.log(`${this.name}正在吃${food}`)
}

1. 原型链继承：将父类的实例作为子例的原型
优点：
非常纯粹的继承关系，实例是子类的实例，也是父类的实例
父类新增原型方法/属性，子类都能访问到

缺点：
无法实现多继承
创建子类实例时，无法向父类构造函数传参
来自原型对象的引用是所有实例共享的
function Cat1() {
  this.run = function() {
    console.log(`${this.name}正在跑`)
  }
}
Cat1.prototype = new Animal()

2. 构造继承：使用父类的构造函数来增强子类的实例，等于是复制父类的实例属性给子类（没用到原型）
优点：
解决1中，子类实例共享父类引用属性的问题
创建子类实例时，可以向父类传递参数
可以实现多继承

缺点：
实例并不是父类的实例，只是子类的实例
只能继承父类的的实例属性和方法，不能继承原型属性和方法
无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
function Cat2(name) {
  Animal.call(this, name)
}

3. 实例继承：为父类实例添加新的特性，作为子类实例返回
优点：
不限制调用方式 new Cat3()和Cat3()都返回相同结果，已经实例化

缺点：
实例是父类的实例，不是子类的实例
不支持多继承
function Cat3(name, age) {
  var instance = new Animal(name)
  instance.age = age
  return instance
}

4. 拷贝继承：循环复制父类及原型上的属性和方法
优点：
支持多继承

缺点：
效率低，内存占用高（要拷贝属性）
无法获取父类不可枚举方法
function Cat4(name) {
  var animal = new Animal()
  for (p in animal) {
    Cat4.prototype[p] = animal[p]
  }
  this.name = name
}

5. 组合继承：通过调用父类的构造，继承父类的属性和方法并保留传参的优点，通过将父类实例作为子类的原型，实现函数复用
优点：
补全方法2，可以继承父类属性和方法，也可以继承原型属性和方法
即是父类的实例，也是子类的实例
不存在引用属性共享的问题
可传参
函数可复用

缺点：
调用两次父类构造函数，生成两份实例
function Cat5(name) {
  Animal.call(this, name)
}
Cat5.prototype = new Animal()
Cat5.prototype.constructor = Cat5 // 修复构造函数指向

6. 寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
优点：
非常好

缺点：无
function Cat6(name) {
  Animal.call(this, name)
}
(function() {
  // 创建一个空的构造方法
  var Super = function(){}
  Super.prototype = Animal.prototype
  // 将实例作为子类的原型
  Cat5.prototype = new Super()
  Cat5.prototype.constructor = Cat5 // 修复构造函数指向
})()

7. es6 class
优点：
更接近面向对象语言
规范化
class Animal7 {
  constructor(name) {
    this.name = name
  }
  static hello() {
    console.log('hello')
  }
}
class Cat7 extends Animal7 {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}