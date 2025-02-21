/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  const hashTable = {};
  let freqCount = 0;
  let answer = 0;

  for (let right = 0; right < s.length; right++) {
    if (hashTable[s[right]]) hashTable[s[right]] += 1;
    else hashTable[s[right]] = 1;

    freqCount = Math.max(freqCount, hashTable[s[right]]);

    while (right - left + 1 - k > freqCount) {
      hashTable[s[left++]] -= 1;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};