(function(doc) {

	const btn = doc.querySelector('#btn');
	btn.addEventListener('click', debounce(() => {
		console.log('发送请求')
	}, 1000));

	const oBox = doc.querySelector('#box');
	oBox.onmouseover = debounce(function() {
		console.log('进来了')
	}, 1000)

	// 延时执行 不立即触发 使用实时保存输入的文本不给反馈，如果要输入时有反馈的话 应使用节流函数
	const oInput = doc.querySelector('#inputName')
  oInput.addEventListener('input', debounce(function () {
    console.log(oInput.value)
  }, 1000))

	/**
	 * 防抖参数：方法，延时时间，首次触发是否延迟触发
	*/
	function debounce(fn, time, triggleNow) {
		let t = null
		return (...args) => {
			t && clearTimeout(t)
			if (triggleNow) {
				let callNow = !t
				t = setTimeout(() => {
					t = null
				}, time)
				callNow && fn.apply(this, args)
			} else {
				t = setTimeout(() => {
					fn.apply(this, args)
				}, time)
			}
		}
	}

































	// function debounce(fn, time = 1000, triggleNow = true) {
	// 	let t = null
	// 	const debounced = function (...args) {
	// 		t && clearTimeout(t)
	// 		// 立即触发
	// 		if (triggleNow) {
	// 			let trgNow = !t
	// 			t = setTimeout(() => {
	// 				t = null
	// 			}, time)
	// 			trgNow && fn.apply(this, args)
	// 		} else {
	// 			t = setTimeout(() => {
	// 				fn.apply(this, args)
	// 			}, time)
	// 		}
	// 	}
	// 	return debounced
	// }

})(document)