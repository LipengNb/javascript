console.log('---------------------------------- 10进制转2进制 ----------------------------------')
/**
 * 十进制转二进制 将该十进制数除以2（2进制是满2进1）并对商取整，知道结果是0为止*/ 

function decimalToBinary(decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''

  while(number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

const num = decimalToBinary(10)
console.log(num)

console.log('-----------------------------------------------------------------------------------')

function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let baseString = ''
  if (!(base >= 2 && base <= 36)) {
    return ''
  }
  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  while(!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}
const nums = baseConverter(16776960, 16)
console.log(nums)

