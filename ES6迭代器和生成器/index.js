function Person () {}
function Fun () {}

Person.prototype = new Fun()

var p1 = new Person()

console.log(p1.constructor === Fun)

console.log(p1.constructor.prototype === Fun.prototype)

console.log(p1.__proto__ === Person.prototype)

console.log(p1.constructor, Fun)
console.log(p1.constructor.prototype, Fun.prototype)
console.log(p1.__proto__)
console.log('-------------------------------')


function * func(ele) {
  console.log('strat')
  yield '2';
  console.log('end')
  yield '3';
}

let fn = func()

let obj = {
  name: 'xiaoChen',
  age: '21'
}

function * objectEntries(obj) {
  const keys = Object.keys(obj);
  for(let key of keys) {
    yield [key, obj[key]]
  }
}

obj[Symbol.iterator] = objectEntries;

for (let [key, value] of objectEntries(obj)) {
  console.log(key, value)
}


const arr = ['a', 'b', 'c', 'd', 'e']

for (let index of arr.keys()) {
  console.log('keys: ', index)
}

for (let index of arr.values()) {
  console.log('values: ', index)
}

for (let index of arr.entries()) {
  console.log('entries: ', index)
}

const objs = {
  name: '张三', 
  age: '18',
  gender: 'woman',
  school: '北京传媒大学'
}

for (let key of Object.keys(objs)) {
  console.log('key: ', key)
}

for (let value of Object.values(objs)) {
  console.log('value: ', value)
}

for(let duad of Object.entries(objs)) {
  console.log(duad)
}