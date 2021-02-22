(function(doc) {

  const oInput = doc.querySelector('#inputName')

  oInput.addEventListener('input', throttle(function() {
    console.log('sss')
  }), 1000)

  function throttle(fn, wait){
    var timer = null;
    return function(){
      var context = this;
      var args = arguments;
      if(!timer){
        timer = setTimeout(function(){
          fn.apply(context, args)
          timer = null
        },wait)
      }
    }
  }

  // function throttle(fn, time) {
  //   let t = null
  //   let pre = Date.now()
  //   return (...args) => {
  //     let now = Date.now()
  //     clearTimeout(t)
  //     const differ = now - pre
  //     console.log(differ)
  //     if (differ >= time) {
  //       fn.apply(this, args)
  //       pre = Date.now()
  //     }
  //   }
  // }

})(document)