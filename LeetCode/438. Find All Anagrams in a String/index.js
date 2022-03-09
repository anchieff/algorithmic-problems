/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const getHash = (s) => {
  return s.split("").reduce((acc, l) => {
    acc[l] = acc[l] ? acc[l] + 1 : 1;
    return acc;
  }, {});
};

const isAnagram = (cur, target) => {
  return Object.keys(target).every((key) => {
    return target[key] === cur[key];
  });
};

const findAnagrams = function (s, p) {
  const result = [];

  const targetHash = getHash(p);
  let currentHash = getHash(s.slice(0, p.length));

  let left = 0;
  let right = p.length - 1;

  while (right < s.length) {
    if (isAnagram(currentHash, targetHash)) {
      result.push(left);
    }

    right += 1;
    currentHash[s[right]] = currentHash[s[right]]
      ? currentHash[s[right]] + 1
      : 1;

    currentHash[s[left]]--;
    left += 1;
  }

  return result;
};
