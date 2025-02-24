/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let answer = new Set();

  function DFS(sum, path) {
    if (sum >= target) {
      if (sum === target) answer.add([...path].sort((a, b) => a - b).join(","));
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      DFS(sum, path);
      sum -= candidates[i];
      path.pop();
    }
  }

  DFS(0, []);

  answer = [...answer].map((v) => v.split(",").map(Number));

  return answer;
};