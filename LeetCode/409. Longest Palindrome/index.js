/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hashTable = makeHash(s);
  let result = 0;
  let total = 0;

  let cnts = Object.values(hashTable);

  for (let item of cnts) {
    total += item;
    if (item % 2 === 0) {
      result += item;
    } else {
      result += item - 1;
    }
  }

  if (total - result > 0) {
    result += 1;
  }

  return result;
};

function makeHash(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = hash[str[i]] ? hash[str[i]] + 1 : 1;
  }
  return hash;
}

// abccccdd

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
