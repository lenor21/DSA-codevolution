function binarySearch(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

// console.log(binarySearch([-1, 5, 9, 3, 2, 4, 8], 4));
