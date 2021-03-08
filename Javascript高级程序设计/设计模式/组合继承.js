/* 
  综合了原型链和盗用构造函数的优点
  使用原型链继承原型上的属性和方法
  使用盗用构造函数继承实例属性 
*/

function SuperType(name) {
  this.colors = ['red', 'yellow', 'pink']
  this.name = name
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType (name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType()

SubType.prototype.sayAge = function () {
  console.log(this.age)
}

let instance1 = new SubType('王五', 28)

instance1.colors.push('green')
console.log(instance1.colors)
instance1.sayName()
instance1.sayAge()



let instance2 = new SubType('李四', 30)
console.log(instance2.colors)
instance2.sayName()
instance2.sayAge()

console.log(instance2 instanceof SubType)