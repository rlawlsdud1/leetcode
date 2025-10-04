/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countObj = {};
  nums.forEach((num) => {
    countObj[num] ? (countObj[num] += 1) : (countObj[num] = 1);
  });

  const countOfNum = {};

  const entries = Object.entries(countObj);
  const entriesLength = entries.length;
  const countSet = new Set();

  for (let i = 0; i < entriesLength; i++) {
    const [num, cnt] = entries[i];
    countOfNum[cnt]
      ? countOfNum[cnt].push(Number(num))
      : (countOfNum[cnt] = [Number(num)]);

    countSet.add(cnt);
  }

  const countSetSize = countSet.size;
  const countSetToArr = [...countSet];
  countSetToArr.sort((a, b) => b - a);
  let answer = [];

  for (let i = 0; i < countSetSize; i++) {
    const cur = countSetToArr[i];

    if (answer.length + countOfNum[cur].length <= k) {
      answer = answer.concat(countOfNum[cur]);
    } else break;
  }

  return answer;
};