let arr1 = [9, 3, 1, 4, 2, 7, 8, 6, 5]
let arr2 = [9, 3, 1, 4, 2, 7, 8, 6, 5]
let arr3 = [9, 3, 1, 4, 2, 7, 8, 6, 5]

let n1 = 0
let n2 = 0
let n3 = 0
let m1 = 0
let m2 = 0
let m3 = 0

// 交换方法
function exchangeItem(arr, left, right) {
  let arrRight = arr[left]
  arr[left] = arr[right]
  arr[right] = arrRight
}

// 基础方法
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    n1++
    for (let j = 0; j < arr.length - i; j++) {
      m1++
      if (arr[j] > arr[j+1]) exchangeItem(arr, j, j+1)
    }
  }
}

// 优化方案1
function bubbleSort2(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    n2++
    for (let j = 0; j < arr.length - 1 - i; j++) {
      m2++
      if (arr[j] > arr[j+1]) exchangeItem(arr, j, j+1)
    }
  }
}

// 优化方案2
function bubbleSort3(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    n3++
    let bool = true
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        bool = false
        exchangeItem(arr, j, j+1)
      }
      m3++
    }
    if (bool) {
      break
    }
  }
}



console.log('--------one--------')
bubbleSort1(arr1)
console.log(arr1)
console.log('n1', n1)
console.log('m1', m1)
console.log('--------one--------')

// --------one--------
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//   n1 8
//   m1 44
// --------one--------


console.log('--------two--------')
bubbleSort2(arr2)
console.log(arr2)
console.log('n2', n2)
console.log('m2', m2)
console.log('--------two--------')

// --------two--------
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// n2 8
// m2 36
// --------two--------


console.log('--------three--------')
bubbleSort3(arr3)
console.log(arr3)
console.log('n3', n3)
console.log('m3', m3)
console.log('--------three--------')

// --------three--------
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//   n3 5
//   m3 30
// --------three--------
