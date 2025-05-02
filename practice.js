function binarySearch(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);

  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  console.log(leftIndex, rightIndex);

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (target < sortedArr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([5, -3, 8, 6, 9, 10, 2], -3)); // 4
