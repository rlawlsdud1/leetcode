/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  function DFS(node, graph, visited) {
    for (const adjacantNode of graph[node] || []) {
      if (!visited.has(adjacantNode)) {
        visited.add(adjacantNode);
        DFS(adjacantNode, graph, visited);
      }
    }
  }
  const graph = {};
  const visited = new Set();

  const n = isConnected.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        graph[i] ? graph[i].push(j) : (graph[i] = [j]);
        graph[j] ? graph[j].push(i) : (graph[j] = [i]);
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      visited.add(i);
      DFS(i, graph, visited);
      answer++;
    }
  }

  return answer;
};