/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = -1;
  let right = nums.length;
  let position = 0;

  while (right - left > 1) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid; // возвращаем позицию, если нашли элемент

    if (nums[mid] > target) {
      right = mid;
      position = mid;
    } else {
      left = mid;
      position = mid + 1;
    }
  }

  return position;
};
