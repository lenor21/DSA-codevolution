const insertionArr = [-2, 9, 6, 7, 3, -20, 5, 4, 1];
// console.log(insertionArr);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // console.log(i);

    let numberToInsert = arr[i]; // 9
    let j = i - 1; // -2

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }

  return arr;
}

// insertionSort(insertionArr);
// console.log(insertionArr);
