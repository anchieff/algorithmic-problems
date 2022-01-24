/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const st = [];

  for (let i = 0; i < s.length; i++) {
    if (
      st.length > 0 &&
      st[st.length - 1] !== s[i] &&
      st[st.length - 1].toLowerCase() === s[i].toLowerCase()
    ) {
      st.pop();
    } else {
      st.push(s[i]);
    }
  }

  return st.join("");
};
