/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let rigth = 0;
  let result = 0;
  let hash = {};

  while (rigth < s.length) {
    if (!hash[s[rigth]]) {
      result = Math.max(result, rigth - left + 1);
      hash[s[rigth]] = true;
      rigth++;
    } else {
      hash[s[left]] = false;
      left++;
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("p"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));
