/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;

  let [left, right] = [0, 0];
  const hashTable = {};
  let answer = 0;

  while (right < s.length) {
    if (hashTable[s[right]]) {
      delete hashTable[s[left++]];
    } else {
      answer = Math.max(answer, right - left + 1);
      hashTable[s[right++]] = 1;
    }
  }
  return answer;
};