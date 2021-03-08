/* const person = {
  name: '张三',
  age: '18',
  school: '哥伦比亚',
  year: 2017,
  _year: 2017
}

// Object.defineProperty(person, 'name', {
//   writable: false, // 不可修改
//   configurable: false, //不可配置
//   enumerable: false //不可枚举
// })
// person.name = '李四'
// delete person.name
// for (const key in person) {
//   console.log(person[key])
// }

Object.defineProperties(person, {
  _year: {
    value: '2017'
  },
  name: {
    configurable: false,
    writable: false,
    enumerable: false
  },
  year: {
    get() {
      return this._year
    },
    set(newValue) {
      if (newValue > 2017) {
        this._year = newValue
        console.log('我被修改了：', newValue)
      }
    }
  },
  school: {

  }
})
// ES2017新增的静态方法 这个方法实际上会在每个属性上调用
// getOwnPropertyDescriptor()并在一个新对象中返回他们
console.log(Object.getOwnPropertyDescriptors(person))


console.log()
person.year = 2018
console.log(person) */

let person = {
  name: 'Matt',
  age: 27
}

function printPerson (foo, { name: personName, age: personAge }, bar) {
  console.log(arguments)
  console.log(personName, personAge)
}

printPerson('1st', person, '2end')