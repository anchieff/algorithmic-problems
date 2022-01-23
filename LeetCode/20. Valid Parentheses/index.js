/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const st = [];
  const m = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      st.push(s[i]);
    } else {
      const actual = st.pop();
      const expected = m[s[i]];

      if (actual != expected) {
        return false;
      }
    }
  }

  return st.length == 0;
};
