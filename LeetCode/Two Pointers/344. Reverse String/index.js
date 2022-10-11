/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let rigth = s.length - 1;

  while (left < rigth) {
    [s[left], s[rigth]] = [s[rigth], s[left]];
    left++;
    rigth--;
  }
};
