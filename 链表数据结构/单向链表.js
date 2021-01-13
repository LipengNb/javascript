console.log('----------------------------------- 链表数据结构 -----------------------------------')
// 引用了utils里的 defaultEquals函数 and Node类
class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0
		this.head = null
		this.equalsFn = equalsFn
	}
	// 项链表尾部添加一个新元素
	push(element) {
		const node = new Node(element)
		let current
		// 如果head为null 就意味着在向链表添加第一个元素
		if (this.head === null) {
			this.head = node
		} else {
			current = this.head
			while(current.next !== null) {
				current = current.next
			}
			current.next = node
		}
		this.count++
	}
	// 项链表的特定位置插入一个新元素
	insert(element, position) {
		if (position >= 0 && position < this.count) {
			const node = new Node(element)
			if (position === 0) {
				const current = this.head
				node.next = current
				this.head = node
			} else {
				const previous = this.getElementAt(position - 1)
				const current = previous.next
				node.next = current
				previous.next = node
			}
			this.count++
			return true
		}
		return false
	}
	// 从链表中移除一个元素
	remove(element) {
		const index = this.indexOf(element)
		return this.removeAt(index)
	}
	// 返回元素在链表中的索引，如果链表中没有该元素则返回-1
	indexOf(element) {
		let current = this.head
		for (let i = 0; i < this.count && this.head !== null; i++) {
			if (defaultEquals(current.element, element)) {
				return i
			}
			current = current.next
		}
		return -1
	}
	// 从链表的特定位置移除一个元素
	removeAt(position) {
		if (position >= 0 && position < this.count) {
			let current = this.head
			if (position === 0) {
				this.head = current.next
			} else {
				// 要删除元素的上一个元素
				const previous = this.getElementAt(position -1)
				// 要删除的当前元素
				current = previous.next
				// 将previous与current的下一项链接起来; 跳过current,从而移除它
				previous.next = current.next
			}
			this.count--
			return current.element
		}
		return undefined
	}
	// 返回链表终特定位置的元素。如果链表中不存在这样的元素，则返回undefined
	getElementAt(position) {
		if (position >= 0 && position < this.count) {
			let node = this.head
			for (let i = 0; i < position && node !== null; i++) {
				node = node.next
			}
			return node
		}
		return undefined
	}
	// 如果链表中不包含任何元素 返回true 反之链表长度大于0的 返回false
	isEmpty() {
		return this.count === 0
	}
	// 返回链表包含元素的个数，与数组的length属性类似
	size() {
		return this.count
	}
	// 返回表示整个链表的字符串 由于链表使用了Node类 就需要重写继承自Javascript对象默认的toString()方法，让其只输出元素的值
	toString() {
		if (this.head === null) {
			return null
		}
		let objString = `${this.head.element}`
		let current = this.head.next
		for (let i = 0; i < this.count && current !== null; i++) {
			objString = `${objString}, ${current.element}`
			current = current.next
		}
		return objString
	}
}

const list = new LinkedList()
list.push(11)
list.push(22)
list.push(33)
list.push(44)
list.push(55)
list.push(66)
list.insert(2, 1)
console.log(list.toString())
console.log('------------------------------------------------------------------------------------')