/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let first = 0;
  let second = numbers.length - 1;
  while (second > first) {
    if (numbers[first] + numbers[second] === target)
      return [first + 1, second + 1];
    if (numbers[first] + numbers[second] > target) {
      second--;
    } else {
      first++;
    }
  }
};
