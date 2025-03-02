/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0,
    answer = 0;
  const hashTable = {};

  for (let right = 0; right < fruits.length; right++) {
    if (hashTable[fruits[right]]) hashTable[fruits[right]] += 1;
    else hashTable[fruits[right]] = 1;

    while (Object.keys(hashTable).length > 2) {
      hashTable[fruits[left]] -= 1;
      if (!hashTable[fruits[left]]) delete hashTable[fruits[left]];
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }
  return answer;
};