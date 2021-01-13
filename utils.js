function defaultToString(item) {
	if (item === null) {
		return 'NULL'
	} else if (item === undefined) {
		return 'UDEFINED'
	} else if (typeof item === 'string' || item instanceof String) {
		return `${item}`
	}
	return item.toString()
}

function defaultEquals(a, b) {
	return a === b
}

class ValuePair {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
	toString() {
		return `[#${this.key}: ${this.value}]`
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}