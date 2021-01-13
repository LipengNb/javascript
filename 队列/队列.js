
class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 向队列尾部添加一个(或多个)新的项
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 移除队列的第一项(即排在队列最前面的项)并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 返回队列中第一个元素 最先被添加，也将是最先被移除的元素，队列不做任何变动
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 队列中不包含任何元素 返回true
  isEmpty() {
    return this.size() === 0
  }
  // 队列元素的个数
  size() {
    return this.count - this.lowestCount
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(11)
queue.enqueue(12)
queue.enqueue(13)
queue.enqueue(14)
console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.peek())
console.log(queue.toString())