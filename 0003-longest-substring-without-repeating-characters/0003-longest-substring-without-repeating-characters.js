/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    answer = 0;

  const hashTable = {};

  while (right < s.length) {
    while (hashTable[s[right]]) {
      delete hashTable[s[left++]];
    }
    hashTable[s[right]] = 1;
    answer = Math.max(answer, right - left + 1);
    right++;
  }

  return answer;
};