/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const n = heights.length;
  const m = heights[0].length;
  const visitedPacific = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(false)
  );
  const visitedAtlantic = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(false)
  );

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function DFS(x, y, visited) {
    visited[x][y] = true;

    for (let i = 0; i < directions.length; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];

      if (nx >= 0 && nx >= 0 && nx < n && ny < m && !visited[nx][ny]) {
        // 새로 가려는 곳이 더 큰 곳인지
        if (heights[x][y] <= heights[nx][ny]) {
          DFS(nx, ny, visited);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) DFS(i, 0, visitedPacific);
  for (let j = 1; j < m; j++) DFS(0, j, visitedPacific);

  for (let i = 0; i < n; i++) DFS(i, m - 1, visitedAtlantic);
  for (let j = 0; j < m - 1; j++) DFS(n - 1, j, visitedAtlantic);

  const answer = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visitedPacific[i][j] && visitedAtlantic[i][j]) {
        answer.push([i, j]);
      }
    }
  }

  return answer;
};