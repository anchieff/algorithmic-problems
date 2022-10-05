/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(11));
