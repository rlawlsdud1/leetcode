/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];
  function DFS(idx, path) {
    answer.push([...path]);

    for (let i = idx; i < nums.length; i++) {
      path.push(nums[i]);
      DFS(i + 1, path);
      path.pop();
    }
  }

  DFS(0, []);
  return answer;
};