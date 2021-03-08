

function getUrlParams(url) {
  const _url = url || window.localtion.href
  const _urlParams = _url.match(/([?&])(.+?=[^&]+)/igm);
  const objParams = _urlParams ? _urlParams.reduce((a, b) => {
    const value = b.slice(1).split('=');
    a[value[0]] = value[1]
    return a
  }, {}) : {}
  console.log(objParams)
}


getUrlParams('wwww.baidu.com?id=12&name=张三&age=23')








// class MyPromise {
//   constructor(fn) {
//     this.resolvedCallbacks = [];
//     this.rejectedCallbacks = [];

//     this.state = 'PENDING';
//     this.value = '';

//     fn(this.resolve.bind(this), this.reject.bind(this));
//   }

//   resolve(value) {
//     if (this.state === 'PENDING') {
//       this.state = 'RESOLVED';
//       this.value = value;

//       this.resolvedCallbacks.map(cb => cb(value));
//     }
//   }

//   reject(value) {
//     if (this.state === 'PENDING') {
//       this.state = 'REJECTED';
//       this.value = value;

//       this.rejectedCallbacks.map(cb => cb(value));
//     }
//   }

//   then(onFulfilled, onRejected) {
//     if (this.state === 'PENDING') {
//       this.resolvedCallbacks.push(onFulfilled);
//       this.rejectedCallbacks.push(onRejected);
//     }

//     if (this.state === 'RESOLVED') {
//       onFulfilled(this.value)
//     }

//     if (this.state === 'REJECTED') {
//       onRejected(this.value)
//     }
//   }

// }


// function getData() {
//   return new MyPromise((resolvesa, reject) => {
//     if (true == 1) {
//       resolvesa(1)
//     } else {
//       reject(0)
//     }
//   })
// }
// getData().then(res => {
//   console.log(res)
// })