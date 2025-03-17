/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];
  function BT(path, start) {
    answer.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      BT(path, i + 1);
      path.pop();
    }
  }

  BT([], 0);
  return answer;
};

console.log(subsets([1, 2, 3]));
