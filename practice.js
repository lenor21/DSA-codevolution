function twoOfSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(i, j);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return nums;
}

console.log(twoOfSum([1, 1, 2, 7, 11, 15], 9));
