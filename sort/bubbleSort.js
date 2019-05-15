let arr = [9, 3, 1, 4, 2, 7, 8, 6, 5]

function exchangeItem(arr, left, right) {
  let arrRight = arr[left]
  arr[left] = arr[right]
  arr[right] = arrRight
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) exchangeItem(arr, j, j+1)
    }
  }
}

bubbleSort(arr)

console.log(arr) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
