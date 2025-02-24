/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];

  function DFS(index, path) {
    answer.push([...path]);

    if (index > nums.length - 1) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      DFS(i + 1, path);
      path.pop();
    }
  }

  DFS(0, []);

  return answer;
};