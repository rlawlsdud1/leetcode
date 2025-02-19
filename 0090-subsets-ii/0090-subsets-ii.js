/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let answer = new Set();

  function BT(idx, path) {
    answer.add([...path].sort((a, b) => a - b).join(","));
    for (let i = idx; i < nums.length; i++) {
      path.push(nums[i]);
      BT(i + 1, path);
      path.pop();
    }
  }

  BT(0, []);
  answer = [...answer].map((v) => v.split(",").map(Number));
  answer[0] = [];

  return answer;
};