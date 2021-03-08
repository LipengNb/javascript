
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subProperty = false
}

// 继承SuperType
SubType.prototype = new SuperType()

// 新方法
SubType.prototype.getSubValue = function () {
  return this.subProperty
}
// 覆盖已有的方法
SubType.prototype.getSuperValue = function () {
  return false
}

let instance = new SubType()

console.log(instance.getSuperValue())



















