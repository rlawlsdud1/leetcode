/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const hashTable = {};
  let left = 0,
    answer = 0,
    freqCount = 0;

  for (let right = 0; right < s.length; right++) {
    if (hashTable[s[right]]) hashTable[s[right]] += 1;
    else hashTable[s[right]] = 1;

    freqCount = Math.max(freqCount, hashTable[s[right]]);

    // 현재 윈도우에서 k개 바꿔도 조건 성립안하는 경우
    while (right - left + 1 > freqCount + k) {
      hashTable[s[left++]] -= 1;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};