/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];

  function BT(idx, path) {
    answer.push([...path]);
    for (let i = idx; i < nums.length; i++) {
      path.push(nums[i]);
      BT(i + 1, path);
      path.pop();
    }
  }

  BT(0, []);

  return answer;
};