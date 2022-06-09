/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  let result = [];

  for (let i = n - 1; i > -1; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] ** 2;
      left++;
    } else {
      result[i] = nums[right] ** 2;
      right--;
    }
  }
  return result;
};
