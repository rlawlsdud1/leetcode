/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let answer = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    let temp = sum;
    for (let left = 0; left <= right; left++) {
      if (temp === k) answer++;

      temp -= nums[left];
    }
  }

  return answer;
};