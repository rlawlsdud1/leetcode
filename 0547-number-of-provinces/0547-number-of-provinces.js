/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visited = Array.from({ length: isConnected.length }).fill(false);

  function DFS(node) {
    for (let i = 0; i < isConnected[node].length; i++) {
      if (!visited[i] && isConnected[node][i] === 1) {
        visited[i] = true;
        DFS(i);
      }
    }
  }

  let count = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      DFS(i);
      count++;
    }
  }

  return count;
};