/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0,
    freqCount = 0,
    answer = 0;
  const hashTable = {};

  for (let right = 0; right < s.length; right++) {
    if (hashTable[s[right]]) hashTable[s[right]] += 1;
    else hashTable[s[right]] = 1;

    freqCount = Math.max(freqCount, hashTable[s[right]]);

    // 윈도우크기가 최빈값+k 보다 크다면 윈도우 크기를 줄여야한다
    while (right - left + 1 > freqCount + k) {
      hashTable[s[left++]] -= 1;
    }

    answer = Math.max(answer, right - left + 1);
  }
  return answer;
};