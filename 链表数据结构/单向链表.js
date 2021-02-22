console.log('----------------------------------- 链表数据结构 -----------------------------------')

// 单向数据链表

class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0
		this.head = null
		this.equalsFn = defaultEquals
	}
	// 项链表追加元素
	push(element) {
		const node = new Node(element)
		if (this.head === null) {
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
	// 指定位置插入 元素
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element)
			let current = this.head
			if (index === 0) {
				node.next = current
				this.head = node
			} else {
				const previous = this.getElementAt(index - 1)
				current = previous.next
				node.next = current
				previous.next = node
			}
			this.count++
			return true
		}
		return false
	}
	// 根据元素删除节点
	remove(element) {
		const index = this.indexOf(element)
		return this.removeAt(index)
	}
	// 根据索引删除节点
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
	// 查找该元素在链表中的索引 并返回 未找到 返回 -1
	indexOf(element) {
		let current = this.head
		for (let i = 0; i < this.count && this.head !== null; i++) {
			if (this.equalsFn(element, current.element)) {
				return i
			}
			current = current.next
		}
		return -1
	}
	// 根据索引返回当前的链表节点
	getElementAt(index) {
		if (index >= 0 && index <= this.count) {
			let current = this.head
			for (let i = 0; i < index && current !== null; i++) {
				current = current.next
			}
			return current
		}
		return undefined
	}
	// 链表中不包含任何元素 返回true
	isEmpty() {
		return this.size() === 0
	}
	// 返回链表个数
	size() {
		return this.count
	}
	// 返回链表中所有的元素
	toString() {
		let objString = `${this.head.element}`
		let node = this.head.next
		for (let i = 1; i < this.count && node !== null; i++) {
			objString = `${objString}, ${node.element}`
			node = node.next
		}
		return objString
	}
}

const links = new LinkedList()

links.push('Jhon')
links.push('Mark')
links.push('Jack')
links.removeAt(3)
// links.insert('jude', 1)
// links.insert('before', 2)
// links.insert('第一', 0)
// links.push('sss')
// console.log(links.remove('Jhon'))
// console.log(links.remove('第一'))
console.log(links.toString())
console.log(links)