const a = [1, [2, [3, 4]]];

function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result = result.concat(item)
    }
  }
  return result
}

console.log(flatten(a))


function createCurry(func, args) {
  var argity = func.length;
  var args = args || [];
  
  return function () {
    var _args = [].slice.apply(arguments);
    args.push(..._args);
    
    if (args.length < argity) {
      return createCurry.call(this, func, args);
    }
    
    return func.apply(this, args);
  }
}

createCurry(function(s, a) {
  console.log('s')
}, 'a', 'c')























// 实现call
Function.prototype.call = function(context, ...args) {
    
  context = context || window

  const fnSymbol = Symbol('fn')

  context[fnSymbol] = this

  context[fnSymbol](...args)

  delete context[fnSymbol]

}
// 实现apply
Function.prototype.apply = function (context, ...args) {
  
  context = context || window

  const fnSymbol = Symbol('fn')
  
  context[fnSymbol] = this
  
  context[fnSymbol](...args)

  delete context[fnSymbol]

}
// 实现bind
Function.prototype.bind = function(context, ...args) {
  
  context = context || window

  const fnSymbol = Symbol('fn')

  context[fnSymbol] = this

  return function(..._args) {
    args = args.concat(_args)
    context[fnSymbol](...args)
    delete context[fnSymbol]
  }

}

// function foo(msg) {
//   console.log(this.a, msg)
// }

// var o = {
//   a: 1
// }
// foo.apply(o, 'aa')
// // foo.call(o, 'ss')