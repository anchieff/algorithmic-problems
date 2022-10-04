/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let k = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[k - 1] !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
  return k;
};
