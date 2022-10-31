/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function parseString(str) {
    const stack = [];
    for (let s of str) {
      if (s === "#") stack.pop();
      else stack.push(s);
    }
    return stack.join("");
  }
  return parseString(s) === parseString(t);
};
