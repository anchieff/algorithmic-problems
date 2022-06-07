/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
