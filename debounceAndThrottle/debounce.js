// 防抖一般指在重复触犯多次情况下以最后的一次触发为准

function debounce(fn, delay) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn.apply(context, args)
    }, delay)
  }
}

function handlfunc() {
  console.log('防抖')
}

document.addEventListener('scroll', debounce(handlfunc, 200))
