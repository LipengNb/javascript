
class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 在双端队列前端添加新的元素会出现3种情况
  /**
   * 1. 队列为空的话 可以直接调用addBack添加元素
   * 2. this.lowestCount不等于0的情况下说明 之前有删除的操作 所以我们让this.lowestCount减1 的位置来添加新的元素
   * 3. 倒着遍历 让每个元素往后挪一位
   * */ 
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      // {0: "3", 1: "2", 2: "1"} 
      for (let i = this.count; i > 0; i--) {
        console.log('i', i)
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }
  // 在双端队列后端添加新的元素
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  // 在双端队列前端移除第一个元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 在双端队列后端移除第一个元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  // 返回双端队列前端的第一个元素
  peekFront() {
    return this.items[this.lowestCount]
  }
  // 返回双端队列后端的第一个元素
  peekBack() {
    return this.items[this.count - 1]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
}


const deque = new Deque()
deque.addFront('1')
deque.addFront('2')
deque.addFront('3')
// console.log('删除队列第一项', deque.removeFront())
console.log('返回队列第一项', deque.peekFront())
console.log('返回队列最后一项', deque.peekBack())
// console.log('删除队列最后一项', deque.removeBack())
console.log(deque)
console.log(deque.isEmpty())

console.log('------------------------- for -------------------------')

const objs = {
  0: '张三',
  1: '李四',
  2: '王五',
  3: '二蛋'
}
const size = Object.keys(objs).length
for (let i = size; i > 0; i--) {
  objs[i] = objs[i - 1]
}
console.log(objs)
objs[0] = '牛逼'
console.log(objs)