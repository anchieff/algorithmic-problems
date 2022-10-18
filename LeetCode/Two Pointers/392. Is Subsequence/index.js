/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length && !t.length) return true;
  if (!s.length) return true;
  if (!t.length) return false;
  let first = 0;
  let second = 0;

  while (second < t.length) {
    if (s[first] === t[second]) {
      first += 1;
      second += 1;
      if (first === s.length) return true;
    } else {
      second += 1;
    }
  }
  return false;
};
