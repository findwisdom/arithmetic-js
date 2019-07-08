// 节流指相同时间只触发一次

function throttle(fn, delay) {
  let last = 0
  return function () {
    let context = this
    let args = arguments
    let newTime = +new Date()
    if (newTime - last > delay) {
      last = now
      fn.apply(context. args)
    }
  }
}

function handlefunc() {
  console.log(1)
}

let str = 'arr1'
let data = str.split(',')
console.log(data)


function throttle(fn, delay) {
  let timer = null
  let last = 0
  return function () {
    let context = this
    let args = arguments
    let newTime = +new Date()
    if (newTime - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = newTime
        fn.apply(context. args)
      }, delay)
    } else {
      last = newTime
      fn.apply(context. args)
    }
  }
}

// 用新的throttle包装scroll的回调
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)
