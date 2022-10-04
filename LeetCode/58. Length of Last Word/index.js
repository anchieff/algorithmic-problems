/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
