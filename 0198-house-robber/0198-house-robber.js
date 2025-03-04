/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp 2차원 배열로 관리
  // dp[i][0]은 i번째 집 털었을때의 최댓값
  // dp[i][1]은 i번째 집 안 털었을때의 최댓값

  const dp = Array.from({ length: nums.length }, () => [0, 0]);
  dp[0][0] = nums[0];
  dp[0][1] = 0;

  for (let i = 1; i < nums.length; i++) {
    // i번째 집 안털면 i-1 번째에서 최댓값 가져옴
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1]);

    dp[i][0] = dp[i - 1][1] + nums[i];
  }

  return Math.max(...dp[nums.length - 1]);
};