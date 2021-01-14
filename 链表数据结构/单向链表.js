console.log('----------------------------------- 链表数据结构 -----------------------------------')

// 单向数据链表

class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0
		this.items = null
		this.equalsFn = equalsFn
	}
	push(element) {
		const node = new Node(element)
		/**
		 * 1. 添加第一个元素 head = node
		 * 2. 添加第二个元素 current.next = null 不会走while() current.next = node
		 * 3. 添加第三个元素 此时的current.next -> 第二个元素 所以会走while() 直到current.next = null 的时候退出循环
		 *  	最后一次循环 current = current.next 就找到了最后一个元素节点
		 * 4. current.next = node
		 * */ 
		if (this.isEmpty()) {
			this.head = node
		} else {
			let current = this.head
			while(current.next !== null) {
				current = current.next
			}
			current.next = node
		}
		this.count++
	}
	insert(element, index) {
		if (index >= 0 && index < this.count) {
			const node = new Node(element)
			let current = this.head
			if (index === 0) {

			} else {
				const previous = this.getElementAt(index - 1)
				current = previous.next
				node.next = current
				current = node
				this.count ++
			}
		}
		return false
	}
	remove(element) {
		const index = this.indexOf(element)
		return this.removeAt(index)
	}
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head
			if (index === 0) {
				this.head = current.next
			} else {
				const previous = this.getElementAt(index - 1)
				current = previous.next
				previous.next = current.next
			}
			this.count--
			return current.element
		}
		return undefined
	}
	// 返回元素在链表中的索引位置 如果没找到 返回-1
	indexOf(element) {
		let current = this.head
		for (let i = 0; i < this.count; i++) {
			if (this.equalsFn(element, current.element)) {
				return i
			}
			current = current.next
		}
		return -1
	}
	// 返回链表终特定位置的元素。如果链表中不存在这样的元素，则返回undefined
	getElementAt(index) {
		if (index >= 0 && index < this.count) {
			let node = this.head
			for (let i = 0; i < index && this.head !== null; i++) {
				node = node.next
			}
			return node
		}
		return undefined
	}
	isEmpty() {
		return this.size() === 0
	}
	size() {
		return this.count
	}
	toString() {}
}

const linkeds = new LinkedList()

linkeds.push('Jhon')
linkeds.push('Bill')
linkeds.push('Mark')
linkeds.push('Jack')

console.log(linkeds.removeAt(2))
console.log(linkeds.removeAt(0))
console.log(linkeds.remove('Jack'))

linkeds.insert('张三', 0)
console.log('链表', linkeds)








































// // 引用了utils里的 defaultEquals函数 and Node类
// class LinkedList {
// 	constructor(equalsFn = defaultEquals) {
// 		this.count = 0
// 		this.head = null
// 		this.equalsFn = equalsFn
// 	}
// 	// 项链表尾部添加一个新元素
// 	push(element) {
// 		const node = new Node(element)
// 		let current
// 		// 如果head为null 就意味着在向链表添加第一个元素
// 		if (this.head === null) {
// 			this.head = node
// 		} else {
// 			current = this.head
// 			while(current.next !== null) {
// 				current = current.next
// 			}
// 			current.next = node
// 		}
// 		this.count++
// 	}
// 	// 项链表的特定位置插入一个新元素
// 	insert(element, position) {
// 		if (position >= 0 && position < this.count) {
// 			const node = new Node(element)
// 			if (position === 0) {
// 				const current = this.head
// 				node.next = current
// 				this.head = node
// 			} else {
// 				const previous = this.getElementAt(position - 1)
// 				const current = previous.next
// 				node.next = current
// 				previous.next = node
// 			}
// 			this.count++
// 			return true
// 		}
// 		return false
// 	}
// 	// 从链表中移除一个元素
// 	remove(element) {
// 		const index = this.indexOf(element)
// 		return this.removeAt(index)
// 	}
// 	// 返回元素在链表中的索引，如果链表中没有该元素则返回-1
// 	indexOf(element) {
// 		let current = this.head
// 		for (let i = 0; i < this.count && this.head !== null; i++) {
// 			if (defaultEquals(current.element, element)) {
// 				return i
// 			}
// 			current = current.next
// 		}
// 		return -1
// 	}
// 	// 从链表的特定位置移除一个元素
// 	removeAt(position) {
// 		if (position >= 0 && position < this.count) {
// 			let current = this.head
// 			if (position === 0) {
// 				this.head = current.next
// 			} else {
// 				// 要删除元素的上一个元素
// 				const previous = this.getElementAt(position -1)
// 				// 要删除的当前元素
// 				current = previous.next
// 				// 将previous与current的下一项链接起来; 跳过current,从而移除它
// 				previous.next = current.next
// 			}
// 			this.count--
// 			return current.element
// 		}
// 		return undefined
// 	}
// 	// 返回链表终特定位置的元素。如果链表中不存在这样的元素，则返回undefined
// 	getElementAt(position) {
// 		if (position >= 0 && position < this.count) {
// 			let node = this.head
// 			for (let i = 0; i < position && node !== null; i++) {
// 				node = node.next
// 			}
// 			return node
// 		}
// 		return undefined
// 	}
// 	// 如果链表中不包含任何元素 返回true 反之链表长度大于0的 返回false
// 	isEmpty() {
// 		return this.count === 0
// 	}
// 	// 返回链表包含元素的个数，与数组的length属性类似
// 	size() {
// 		return this.count
// 	}
// 	// 返回表示整个链表的字符串 由于链表使用了Node类 就需要重写继承自Javascript对象默认的toString()方法，让其只输出元素的值
// 	toString() {
// 		if (this.head === null) {
// 			return null
// 		}
// 		let objString = `${this.head.element}`
// 		let current = this.head.next
// 		for (let i = 0; i < this.count && current !== null; i++) {
// 			objString = `${objString}, ${current.element}`
// 			current = current.next
// 		}
// 		return objString
// 	}
// }

// const list = new LinkedList()
// list.push(11)
// list.push(22)
// list.push(33)
// list.push(44)
// list.push(55)
// list.push(66)
// list.insert(2, 1)
// console.log(list.toString())
// console.log('------------------------------------------------------------------------------------')
// class LinkedList {
// 	constructor(equalsFn = defaultEquals) {
// 		this.count = 0
// 		this.head = null
// 		this.equalsFn = equalsFn
// 	}
// 	// 向链表尾部添加一个新元素
// 	push(element) {
// 		const node = new Node(element)
// 		let current
// 		if (this.isEmpty()) {
// 			this.head = node
// 		} else {
// 			current = this.head
// 			/**
// 			 * {
// 			 *		element: 'Jhon',
// 						next: {
// 							element: 'Gary',
// 							next: {
// 								element: 'Henry',
// 								next: {
// 									element: 'Bill',
// 									next: null
// 								}
// 							}
// 						}
// 			 * }
// 			*/
// 			while(current.next !== null) {
// 				current = current.next
// 			}
// 			current.next = node
// 		}
// 		this.count++
// 	}
// 	// 向链表指定位置添加一个新元素
// 	insert(element, index) {
// 		if (index >= 0 && index < this.count) {
// 			const node = new Node(element)
// 			let current = this.head
// 			if (index === 0) {
// 				node.next = current
// 				this.head = node
// 			} else {
// 				const previous = this.getElementAt(index - 1)
// 				current = previous.next
// 				node.next = current
// 				previous.next = node
// 			}
// 			this.count++
// 			return true
// 		}
// 		return false
// 	}
// 	// 返回链表中特定位置的元素
// 	getElementAt(index) {
// 		if (index >= 0 && index < this.count) {
// 			let node = this.head
// 			for (let i = 0; i < index && node !== null; i++ ) {
// 				node = node.next
// 			}
// 			return node
// 		}
// 		return undefined
// 	}
// 	// 从链表中移除一个元素
// 	remove(element) {
// 		const index = this.indexOf(element)
// 		return this.removeAt(index)
// 	}
// 	// 返回元素在链表中的索引 没有元素则返回 -1
// 	indexOf(element) {
// 		let current = this.head
// 		for (let i = 0; i < this.count && current !== null; i++) {
// 			if (this.equalsFn(element, current.element)) {
// 				return i
// 			}
// 			current = current.next
// 		}
// 		return -1
// 	}
// 	// 从链表中特定位置移除一个元素
// 	removeAt(index) {
// 		if (index >= 0 && index < this.count) {
// 			let current = this.head
// 			if (index === 0) {
// 				this.head = current.next
// 			} else {
// 				const previous = this.getElementAt(index - 1)
// 				current = previous.next
// 				previous.next = current.next
// 				// let previous;
// 				// /**
// 				//  * index = 2
// 				//  * i = 0 -> previous = { element: 'Jhon', next: { element: 'Gary', next: ... } }
// 				//  * 					current  = { element: 'Gary', next: ... }
// 				//  * i = 1 -> previous = { element: 'Gary', next: { element: 'Henry', next: ... }}
// 				//  * 					current  = { element: 'Henry', next: ... }
// 				//  * 跳出循环体
// 				//  * 让previous与current得下一项链接起来, 跳过current, 从而移除它
// 				// */
// 				// for (let i = 0; i < index; i++) {
// 				// 	previous = current
// 				// 	current = current.next
// 				// }
// 				// console.log('previous', previous)
// 				// console.log('current', current)
// 				// previous.next = current.next
// 			}
// 			this.count--
// 			return current.element
// 		}
// 		return undefined
// 	}
// 	// 如果链表中不包含任何元素 返回 true 链表长度大于0 返回 false
// 	isEmpty() {
// 		return this.size() === 0
// 	}
// 	// 返回链表包含元素的个数
// 	size() {
// 		return this.count
// 	}
// 	// 返回整个链表的字符串
// 	toString() {}
// }

// const linked = new LinkedList()

// linked.push('Jhon')
// linked.push('Gary')
// linked.push('Henry')
// linked.push('Bill')
// console.log('getElementAt', linked.getElementAt(2))
// linked.removeAt(2)
// console.log(linked.indexOf('Bill'))
// console.log(linked.remove('Bill'))
// console.log(linked.remove('Jhon'))
// console.log(linked.remove('xx'))
// linked.insert('张三', 0)
// linked.insert('李四', 0)
// linked.insert('王五', 2)
// console.log('链表:', linked)