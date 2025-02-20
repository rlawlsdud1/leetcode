/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let left = 0;
  let right = 0;
  let hashTable = {};
  let answer = 0;

  while (right < s.length) {
    if (hashTable[s[right]]) {
      delete hashTable[s[left]];
      left++;
    } else {
      hashTable[s[right]] = 1;
      answer = Math.max(answer, right - left + 1);
      right++;
    }
  }

  return answer;
};