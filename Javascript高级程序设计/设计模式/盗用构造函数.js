/* 
  基本思路：在子类构造函数中调用父类构造函数
  因为毕竟函数就是在特定上下文中执行代码的简单对象，
  所以可以使用apply() 和 call() 方法以新创建的对象为上下文执行构造函数
*/

function Supertype (name) {
  this.name = name
  this.colors = ['yellow', 'red', 'blue']
}

Supertype.prototype.sayName = function () {
  return this.name
}

function SubType () {
  Supertype.call(this, 'Mark')
}
// SubType.prototype.sayName = function () {
//   return this.name
// }


const sub1 = new SubType()
sub1.colors.push('pink')
sub1.name = 'Jack'
console.log(sub1.name)
console.log(sub1.colors)

const sub2 = new SubType()
console.log(sub2.sayName())
console.log(sub2)

/* 
  缺点：
    也是使用构造函数模式自定义类型的问题 必须在构造函数中定义方法
    因此函数不能重用，此外，子类也不能访问父类原型上定义的方法
*/