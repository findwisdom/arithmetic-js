function exchangeItem(arr, left, right) {
  let arrRight = arr[left]
  arr[left] = arr[right]
  arr[right] = arrRight
}

let arr = [10, 2, 4, 5, 6, 7, 3, 5, 31, 3, 41]

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i+1; j < arr.length; j++ ) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) exchangeItem(arr, i, minIndex)
  }
}

selectSort(arr)

console.log(arr) // [ 2, 3, 3, 4, 5, 5, 6, 7, 10, 31, 41 ]


function scrollFn(arg, arg2, arg3){
  console.log(arguments)
}

function debounce(fn, delay) {
  // 定时器
  let timer = null

  // 将debounce处理结果当作函数返回
  return function () {
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments

    // 每次事件被触发时，都去清除之前的旧定时器
    if(timer) {
      clearTimeout(timer)
    }
    // 设立新定时器
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
const better_scroll = debounce(scrollFn, 1000)

document.addEventListener('scroll', better_scroll)
