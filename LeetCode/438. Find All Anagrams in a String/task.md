Given two strings `s` and `p`, _return an array of all the start indices of `p's` anagrams in `s`_. You may return the answer in _any order_.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example 1:

_Input_: s = "cbaebabacd", p = "abc"
_Output_: [0,6]
_Explanation_:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

### Example 2:

_Input_: s = "abab", p = "ab"
_Output_: [0,1,2]
_Explanation_:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
