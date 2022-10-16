/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return findMajority(nums, 0, nums.length - 1);
};

function findMajority(nums, from, to) {
  if (from === to) return nums[from];

  const mid = Math.floor((from + to) / 2);
  const leftMajority = findMajority(nums, from, mid);
  const rightMajority = findMajority(nums, mid + 1, to);

  if (leftMajority === rightMajority) return leftMajority;

  const leftCount = count(nums, leftMajority, from, to);
  const rightCount = count(nums, rightMajority, from, to);

  return leftCount > rightCount ? leftMajority : rightMajority;
}

function count(nums, target, from, to) {
  let result = 0;

  for (let i = from; i <= to; i++) {
    if (nums[i] === target) result++;
  }
  return result;
}
