/* 
  工厂模式， 用于抽象创建特定对象的过程,
  这种工厂模式虽然可以解决创建多个类似对象的问题，
  但没有解决对象标识问题(即新创建的对象是什么类型)
*/

function createPerson(name, age, job) {
  const o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayNAme = () => {
    console.log(this.name)
  }
  return o
}
let person1 = createPerson('李四', '19', 'JS打字员')
console.log(person1)

/* 
  构造函数模式 ECMAScript的构造函数就是能创建对象的函数
  与工厂模式的区别在于
    1.没有显示的创建对象
    2.属性和方法直接赋给了this
    3.没有return
  要创建Person实列， 应使用new操作符。以这种方式调用构造函数会执行如下操作
    1.在内存中创建一个新对象
    2.这个新对象内部的[[prototype]]特性被赋值为构造函数的prototype属性
    3.构造函数内部的this被赋值为这个新对象(即this指向新对象)
    4.执行构造函数内部的代码(给新对象添加属性)
    5. 如果构造函数返回非空对象， 则返回该对象；否则，返回刚创建的新对象
  任何函数只要使用new操作符调用的就是构造函数，不使用new操作符调用的函数
  就是普通函数
*/

function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.syaName = () => {
    console.log(this.name)
  }
}

const person2 = new Person('李四', '19', 'Java')
const person3 = new Person('李三', '22', 'Canvas')
console.dir(person2.constructor == Person)
console.dir(person2 instanceof Object)
console.log(person2.syaName === person3.sayNAme)
console.dir(Person)