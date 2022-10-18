/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let hashS = {};
  let hashT = {};
  for (let i = 0; i < s.length; i++) {
    hashS[s[i]] ? hashS[s[i]].push(i) : (hashS[s[i]] = [i]);
    hashT[t[i]] ? hashT[t[i]].push(i) : (hashT[t[i]] = [i]);

    if (JSON.stringify(hashS[s[i]]) !== JSON.stringify(hashT[t[i]]))
      return false;
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));

//
// paper
// {p: [0, 2], a: [1], e: [3], r: [4]}
