console.log('---------------------------------- 对象-实现栈 ----------------------------------')
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const popVal = this.items[this.count]
    delete this.items[this.count]
    return popVal 
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

const stack = new Stack()

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)

// stack.push(10)
// stack.push(11)
// // console.log('栈顶删除一个元素: ',stack.pop())
// // console.log('栈是否为空: ',stack.isEmpty())
// // console.log('栈顶的第一个元素: ', stack.peek())
// // console.log('栈顶删除一个元素: ', stack.pop())
// stack.push(12)
// console.log(stack.toString())
// // console.log(stack)
console.log('---------------------------------------------------------------------------------')