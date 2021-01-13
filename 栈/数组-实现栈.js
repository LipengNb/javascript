/**
 * 栈是一种遵循后进先出(LIFO)原则的有序集合，
 * 新添加或待删除的元素都保存再栈的同一端，称作栈顶
 * 另一端就叫栈底,新元素都靠近栈顶,旧元素都靠近栈底
 * */ 
console.log('---------------------------------- 数组-实现栈 ----------------------------------')

class Stack {
  constructor() {
    this.items = []
  }
  // 添加一个(或多个)新元素到栈顶
  push(element) {
    this.items.push(element)
  }
  // 移除栈顶的元素, 同时返回被删除的元素
  pop() {
    return this.items.pop()
  }
  // 返回栈顶的元素, 仅仅返回栈顶元素.不做任何修改
  peek() {
    return this.items[this.items.length - 1]
  }
  // 如果栈里没有任何元素 返回 true 否则 返回 false
  isEmpty() {
    return this.items.length === 0
  }
  // 清除栈里的所有元素
  clear() {
    this.items = []
  }
  // 返回栈里元素的个数, 和数组的length方法很类似
  size() {
    return this.items.length
  }
}

const stack = new Stack()

console.log(stack.isEmpty())
stack.push(1)
console.log(stack.peek())
console.log(stack.clear())
console.log(stack)

console.log('---------------------------------------------------------------------------------')