const practiceArr = [20, 8, 1, 4, 2, -4, -9, 9, 10, 7];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot < arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// console.log(quickSort(practiceArr));
