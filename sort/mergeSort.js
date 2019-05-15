var arr = [10, 2, 4, 3, 2, 7, 3, 5, 31, 3, 41]


// var merge = function (left,right) {
//   // 我们声明一个最终结果的数组result,
//   // il和ir是用来控制左右两个数组的迭代的变量
//   var result = [],il = 0,ir = 0;
//
//   // 这里，我们的最底层是只有两个只有一个元素的数组
//   /*
//       array[left]和array[right]
//       第一个while， 循环的条件是两个长度变量是否在合法值内。
//   */
//   while(il < left.length && ir < right.length) {
//     // 如果左侧小于右侧，此时的il和ir是相等的都是0。注意这一点
//     // 我们就把左侧的left[il]放入数组并il++。否则，我们就把right[ir]存入数组result并ir++。此时，il和ir就不相等了。
//     // 所以，这时候，我们下一次循环判断的条件就是递增的ir或il与没有递增的il或者ir做比较。这样就使得一个数组中的一个元素与另外数组中所有元素都做过比较。
//     // 希望上面我说明白了想要表达的意思。
//     if(left[il] < right[ir]) {
//       // 这里，不太容易理解。为什么我们要在result中加入il++而不是il?
//       // 其实这里的意思是，先加如left[il]再il++。
//       // 不信，你可以把代码改成这个样子
//       /*
//       result.push(left[il]);
//       il++
//       */
//       // 效果是一样一样的。
//       result.push(left[il++]);
//     } else {
//       result.push(right[ir++]);
//     }
//   };
//   //这两个循环的目的是把剩余的数组元素（包括left数组和right数组）都存入result数组中。
//   // 这样我们就行了一个归并后的结果数组，然后进行下一次的归并过程的初始参数。
//   while(il < left.length) {
//     result.push(left[il++]);
//   };
//
//   while(ir < right.length) {
//     result.push(right[ir++]);
//   };
//
//   console.log('----排序-----')
//   console.log(result)
//   console.log('----排序-----')
//   return result;
// };
//
//
// //这个私有函数，其实就是整个归并排序中“分”的部分。我们来看看它是如何“分”的。
// var mergeSortRec = function (array) {
//   console.log('----拆分-----')
//   console.log(array)
//   console.log('----拆分-----')
//   //存储数组长度。
//   var length = array.length;
//   //由于是递归，所以当length 为 1 的时候，说明我们分到底了。直接返回这个数组。也就是只有一个元素的数组。
//   //同时这个判断条件也是递归的终止条件，要记住任何递归操作都必须有终止条件。不然会陷入死循环。
//   if(length === 1) {
//     return array;
//   }
//   //我们要把原始数组从中一分为二。下面就是一分为二的操作。无需多说。
//   var mid = Math.floor(length / 2),
//     left = array.slice(0,mid),
//     right = array.slice(mid,length);
//   // 这里，我们先不去管merge函数是做什么的。我们先看递归到最底层。merge的两个参数会变成什么。
//   // 由于我们又返回了自身，至此递归就形成了。在merge的参数中我们又递归调用了一次自身。
//   // 那么这次调用我们把left和right两个数组又拆分了一次。直到最后array.length 为 1（归并的最小单位）。
//   // 那么换句话说，实际上merge函数递归的最底层传入的就是两个只有一个元素的数组。
//   return merge(mergeSortRec(left),mergeSortRec(right));
// };

function mergeSortRec (arr) {
  if (arr.length < 2) {
    return arr
  }
  let middleIndex = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, middleIndex)
  let rightArr = arr.slice(middleIndex)
  console.log(leftArr)
  console.log(rightArr)
  return merge(mergeSortRec(leftArr), mergeSortRec(rightArr))
}

function merge (left, right) {
  let res = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      res.push(right.shift())
    } else {
      res.push(left.shift())
    }
   }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}


let data = mergeSortRec(arr);
console.log(data)
