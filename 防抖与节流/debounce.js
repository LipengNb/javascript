(function(doc) {

	const btn = doc.querySelector('#btn');
	btn.addEventListener('click', debounce(() => {
		console.log('发送请求')
	}, 1000));

	const oBox = doc.querySelector('#box');
	oBox.onmouseover = debounce(function() {
		console.log('进来了')
	}, 1000)

	/**
	 * 防抖参数：方法，延时时间，首次触发是否延迟触发
	*/

	function debounce(fn, time = 1000, triggleNow = true) {
		let t = null
		const debounced = function (...args) {
			t && clearTimeout(t)
			// 立即触发
			if (triggleNow) {
				let trgNow = !t
				t = setTimeout(() => {
					t = null
				}, time)
				trgNow && fn.apply(this, args)
			} else {
				t = setTimeout(() => {
					fn.apply(this, args)
				}, time)
			}
		}
		return debounced
	}

})(document)