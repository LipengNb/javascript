(function(doc) {

  function throttle(fn, wait){
    var timer = null;
    return (...args) => {
      if(!timer){
        timer = setTimeout(() => {
          fn.apply(this, args)
          timer = null
        },wait)
      }
    }
  }

  const oInput = doc.querySelector('#inputName')

  oInput.addEventListener('input', throttle(function () {
    console.log(oInput.value)
  }, 1000))

  window.onscroll = throttle(function() {
    console.log('111')
  }, 1000)

})(document)