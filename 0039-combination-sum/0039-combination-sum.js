/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let answer = [];

  candidates.sort((a, b) => a - b);

  function DFS(start, sum, path) {
    if (sum === target) {
      answer.push([...path]); 
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) {
        break;
      }

      path.push(candidates[i]);
      DFS(i, sum + candidates[i], path); 
      path.pop(); 
    }
  }

  DFS(0, 0, []); 

  return answer;
};