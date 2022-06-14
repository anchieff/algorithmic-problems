/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const noZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[noZero] = nums[i];
      noZero++;
    }
  }

  for (let i = noZero; i < nums.length; i++) {
    nums[i] = 0;
  }
};
