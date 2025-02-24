/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let answer = 0;
  function DFS(sum, idx) {
    if (idx === nums.length) {
      if (sum === target) answer++;
      return;
    } else {
      DFS(sum + nums[idx], idx + 1);
      DFS(sum - nums[idx], idx + 1);
    }
  }

  DFS(0, 0);
  return answer;
};