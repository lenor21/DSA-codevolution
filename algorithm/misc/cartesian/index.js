function cartesian(arr1, arr2) {
  let resArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      resArr.push([arr1[i], arr2[j]]);
    }
  }

  return resArr;
}

// console.log(cartesian([1, 2], [3, 4, 5, 6]));
// big O = O(mn)
