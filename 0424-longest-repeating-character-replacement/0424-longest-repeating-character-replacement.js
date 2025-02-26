/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0,
    freqCnt = 0,
    answer = 0;

  const hashTable = {};

  for (let right = 0; right < s.length; right++) {
    if (hashTable[s[right]]) hashTable[s[right]] += 1;
    else hashTable[s[right]] = 1;

    freqCnt = Math.max(freqCnt, hashTable[s[right]]);

    // window의 크기가 더 크면 k개 바꿨을 때, repeating 불가능
    while (right - left + 1 > freqCnt + k) {
      hashTable[s[left++]] -= 1;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};