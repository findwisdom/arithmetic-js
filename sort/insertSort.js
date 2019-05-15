let arr = [10, 2, 4, 5, 6, 7, 3, 5, 31, 3, 41]

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1
    let current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
}

insertSort(arr)

console.log(arr) // [ 2, 3, 3, 4, 5, 5, 6, 7, 10, 31, 41 ]
