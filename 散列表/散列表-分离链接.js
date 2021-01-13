console.log('---------------------------------- 散列表分离链接 ----------------------------------')
class HashTableSeparateChaining extends HashTable {
	constructor(toStrFn = defaultToString) {
		super()
		this.toStrFn = toStrFn
		this.table = {}
	}
	put(key, value) {
		if (key !== null && value !== null) {
			const position = this.hasCode(key)
			if (this.table[postion] === null) {
				this.table[postion] = new LinKedList()
			}
		}
		return false
	}
}

const HashTableSeparate = new HashTableSeparateChaining()
console.log(HashTableSeparate.hasCode(11))
console.log('------------------------------------------------------------------------------------')