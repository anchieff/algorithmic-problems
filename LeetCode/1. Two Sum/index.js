/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j++) {
    let num = target - nums[j];
    if (hash[num] && hash[num] != j) {
      result.push(j, hash[num]);
      break;
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
console.log(twoSum([1, 3, 4, 2], 6)); // [2,3]
