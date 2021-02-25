
function add (num1, num2) {
  const num = num1 + num2
  if (num2+1 > 100) {
    return num
  } else {
    return add(num, num2+1)
  }
}

const num = add(1, 2)
console.log(num)