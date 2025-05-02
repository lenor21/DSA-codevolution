function binarySearch(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b); //  [-5, 2, 4, 6, 10]
  console.log(sortedArr);

  let leftIndex = 0; // 0
  let rightIndex = sortedArr.length - 1; // 4

  while (leftIndex <= rightIndex) {
    // 0 <= 4
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2); // (0 + 4) / 2 = 2

    if (target === sortedArr[middleIndex]) {
      // 6 === sortedArr[2]
      return middleIndex; // 3
    }

    if (target < sortedArr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

// console.log(binarySearch([6, 9, 3, 2, 7, 4, 1], 9));
// big O = O(logn)
