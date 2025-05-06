function linear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// console.log(linear([2, 8, 9, 5, 6, 7], 5));
// big O = O(n)
