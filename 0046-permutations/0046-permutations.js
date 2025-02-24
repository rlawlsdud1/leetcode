/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const answer = [];
  const visited = Array.from({ length: nums.lenght }).fill(false);
  function BT(path) {
    if (path.length === nums.length) {
      answer.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        path.push(nums[i]);

        BT(path);
        visited[i] = false;
        path.pop();
      }
    }
  }

  BT([]);

  return answer;
};