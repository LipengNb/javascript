
// 逐步递归
// ;(function () {

//   function add (num1, num2) {
//     const num = num1 + num2
//     if (num2+1 > 100) {
//       return num
//     } else {
//       return add(num, num2+1)
//     }
//   }

//   const num = add(1, 2)
//   console.log(num)

// })();

//数组去重 
;(function () {
  
  const arr = [1,2,3,4,5,6,7,8,9,1,2,8,9,4,5,3];
  const a1 = [...new Set(arr)];
  console.log(a1);

  const a2 = [];
  const s = arr.filter((item, idx, arr) => !a2.includes(item) && a2.push(item))
  console.log(a2)

  console.log([...arr])

})();