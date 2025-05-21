const mergeArr = [20, 9, 2, 1, -40, 8, 6, 10, 5];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // ***this is an alternative for left and right array
  //   let leftArr = [];
  //   let rightArr = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (middleIndex > i) {
  //       leftArr.push(arr[i]);
  //     } else {
  //       rightArr.push(arr[i]);
  //     }
  //   }

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

// console.log(mergeSort(mergeArr));
// big O = O(nlogn)
