// const practiceArr = [20, 9, 2, 1, -40, 8, 6, 10, 5];

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   const midIndex = Math.floor(arr.length / 2);
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (midIndex > i) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...mergeSort(leftArr), ...mergeSort(rightArr)];
// }

// console.log(mergeSort(practiceArr));
