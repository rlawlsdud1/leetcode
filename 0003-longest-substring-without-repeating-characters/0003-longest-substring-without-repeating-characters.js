/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hashTable = {};
  let left = 0,
    answer = 0;

  for (let right = 0; right < s.length; right++) {
    hashTable[s[right]]
      ? (hashTable[s[right]] += 1)
      : (hashTable[s[right]] = 1);

    while (hashTable[s[right]] > 1) {
      hashTable[s[left++]] -= 1;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};