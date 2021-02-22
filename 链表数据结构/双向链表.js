// 双向链表和普通链表的区别在于，在链表中，一个节点只有链向下一个节点的链接
// 而在双向链表中，链接是双向的：一个链向下一个元素，另一个链向前一个元素
console.log('---------------------------------- 双向链表数据结构 ---------------------------------')


class DoublyNode extends Node {
	constructor(element, next) {
		super(element, next)
		this.prev = null
	}
}

class DoublyLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn)
		this.tail = null
	}
	insert(element, index) {
		if (index >= 0 && index < this.count) {
			const node = new DoublyNode(element)
			let current = this.head
			if (index === 0) {
				if (this.head === null) {
					this.head = node
					this.tail = node
				} else {
					node.next = this.head
					current.prev = node
					this.head = node
				}
			} else {

			}
		}
		return false
	}
}

const doubly = new DoublyLinkedList()

doubly.push('张三')
doubly.push('王五')
console.log(doubly)


































// class DoublyNode extends Node {
// 	constructor(element, next, prev = null) {
// 		super(element, next)
// 		this.prev = prev
// 	}
// }

// class DounlyLinkedList extends LinkedList {
// 	constructor(equalsFn = defaultEquals) {
// 		super(equalsFn)
// 		this.tail = null
// 	}
// 	// 插入
// 	insert(element, position) {
// 		if (position >= 0 && position < this.count) {
// 			const node = new DoublyNode(element)
// 			let current = this.head
// 			if (position === 0) {
// 				if (this.head === null) {
// 					this.head = node
// 					this.tail = node
// 				} else {
// 					node.next = this.head
// 					current.prev = node
// 					this.head = node
// 				}
// 			} else if (position === this.count) {
// 				current = this.tail
// 				current.next = node
// 				node.prev = current
// 				this.tail = node
// 			} else {
// 				const previous = this.getElementAt(position - 1)
// 				current = previous.next
// 				node.next = current
// 				previous.next = node
// 				previous.prev = node
// 				node.prev = previous
// 			}
// 			this.count++
// 			return true
// 		}
// 		return false
// 	}
// 	removeAt(position) {
// 		if (position >= 0 && position < this.count) {
// 			let current = this.head
// 			if (position === 0) {
// 				this.head = current.next
// 				// 如果只有一项，更新tail
// 				if (this.count === 1) {
// 					this.tail = null
// 				} else {
// 					this.head.prev = null
// 				}
// 			} else if (position === this.count - 1) {
// 				current = this.tail
// 				this.tail = current.prev
// 				this.tail.next = null
// 			} else {
// 				current = this.getElementAt(position)
// 				const previous = current.prev
// 				previous.next = current.next
// 				current.next.prev = previous	
// 			}
// 			this.count--
// 			return current.element
// 		}
// 		return undefined
// 	}
// }
// const dounly = new DounlyLinkedList()
// dounly.insert(10, 0)
// dounly.insert(11, 1)
// dounly.insert(12, 2)
// dounly.insert(111, 1)
// console.log(dounly.toString())
// console.log(dounly.removeAt(1))
// console.log(dounly.toString())
// console.log(dounly)
// console.log('-------------------------------------------------------------------------------------')