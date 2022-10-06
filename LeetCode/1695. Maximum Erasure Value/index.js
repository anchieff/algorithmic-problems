/**
 * @param {number[]} nums
 * @return {number}
 */

const maximumUniqueSubarray = (nums) => {
  let left = 0;
  let rigth = 0;
  let result = 0;
  let total = 0;
  let hash = {};

  while (rigth < nums.length) {
    if (!hash[nums[rigth]]) {
      total += nums[rigth];
      result = Math.max(result, total);
      hash[nums[rigth]] = true;
      rigth++;
    } else {
      total -= nums[left];
      hash[nums[left]] = false;
      left++;
    }
  }
  return result;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
