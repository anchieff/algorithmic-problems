/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const st = [];

  for (const item of num) {
    while (st.length > 0 && st[st.length - 1] > item && k > 0) {
      st.pop();
      k--;
    }
    st.push(item);
  }

  st.reverse();
  while (st[st.length - 1] === "0" && st.length > 1) {
    st.pop();
  }
  st.reverse();

  while (k > 0) {
    st.pop();
    k--;
  }

  if (st.length === 0) {
    return "0";
  }

  return st.join("");
};

console.log(removeKdigits("112", 1));
