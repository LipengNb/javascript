console.log('-------------------------------------- 散列表 --------------------------------------')
class HashTable {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	loseloseHashCode(key) {
		if (typeof key === 'number') {
			return key
		}
		const tableKey = this.toStrFn(key)
		let hash = 0
		for (let i = 0; i < tableKey.length; i++) {
			hash += tableKey.charCodeAt(i)
		}
		console.log(hash)
		return hash % 37
	}
	hasCode(key) {
		return this.loseloseHashCode(key)
	}
	put(key, value) {
		if (key !== null && value !== null) {
			const position = this.hasCode(key)
			this.table[position] = new ValuePair(key, value)
		}
		return false
	}
	get(key) {
		const valuePria = this.table[this.hasCode(key)]
		return valuePria === null ? undefined : valuePria.value
	}
	remove(key) {
		const hash = this.hasCode(key)
		const valuePria = this.table[hash]
		if (valuePria !== null) {
			delete this.table[hash]
			return true
		}
		return false
	}
	isEmpty() {
		return Object.keys(this.table).length === 0
	}
	toString() {
		if (this.isEmpty()) {
			return ''
		}
		const keys = Object.keys(this.table)
		let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
		for (let i = 1; i < keys.length; i++) {
			objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`
		}
		return objString
	}
}

const hash = new HashTable()
// hash.put('Sargeras', 'sargeras@email.com')
// hash.put('Nathan', 'nathan@email.com')
// hash.put('Lipeng', 'lipeng@email.com')
// console.log(hash)
// console.log(hash.toString())
console.log('------------------------------------------------------------------------------------')
