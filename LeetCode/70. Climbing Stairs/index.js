/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let cnt = 1;
  let num = 1;
  while (n--) {
    num += cnt;
    cnt = num - cnt;
  }
  return cnt;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
