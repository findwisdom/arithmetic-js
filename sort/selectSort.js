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
