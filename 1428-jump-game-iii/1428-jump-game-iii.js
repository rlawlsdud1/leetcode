/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const visited = Array.from({ length: arr.length }).fill(false);
  let answer = false;
  function DFS(idx) {
    if (arr[idx] === 0) {
      answer = true;
      return;
    } else if (!visited[idx] && idx >= 0 && idx < arr.length) {
      visited[idx] = true;

      DFS(idx + arr[idx]);
      DFS(idx - arr[idx]);
    }
  }

  DFS(start);

  return answer;
};