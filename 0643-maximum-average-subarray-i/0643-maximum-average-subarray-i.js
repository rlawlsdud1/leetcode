/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let [left, right] = [0, k - 1];
  let sum = nums.slice(left, right + 1).reduce((acc, cur) => acc + cur);
  let answer = sum / k;

  while (right < nums.length - 1) {
    sum += nums[++right];
    sum -= nums[left++];

    answer = Math.max(sum / k, answer);
  }

  return answer;
};