/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => [1, 1]);
  let answer = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      } else if (nums[i] < nums[j]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      }
    }
    answer = Math.max(answer, ...dp[i]);
  }

  return answer;
};

console.log(wiggleMaxLength([84]));
