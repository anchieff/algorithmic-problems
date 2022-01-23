/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const st = [];

  for (const item of tokens) {
    let n1;
    let n2;

    switch (item) {
      case "+":
        n1 = st.pop();
        n2 = st.pop();
        st.push(Number(n1) + Number(n2));
        break;

      case "-":
        n1 = st.pop();
        n2 = st.pop();
        st.push(Number(n2) - Number(n1));
        break;

      case "*":
        n1 = st.pop();
        n2 = st.pop();
        st.push(Number(n1) * Number(n2));
        break;

      case "/":
        n1 = st.pop();
        n2 = st.pop();
        st.push(Math.trunc(Number(n2) / Number(n1)));
        break;

      default:
        st.push(item);
        break;
    }
  }
  return Number(st[0]);
};
