/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const answerArr = Array.from({ length: 2 * 10 ** 4 + 1 }).fill(0);
  nums.forEach((num) => {
    answerArr[num + 10 ** 4] += 1;
  });

  let count = 0;

  for (let i = 2 * 10 ** 4; i >= 0; i--) {
    if (answerArr[i]) count += answerArr[i];

    if (count >= k) return i - 10 ** 4;
  }
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
