/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const n = grid.length;
  const m = grid[0].length;

  function DFS(x, y) {
    grid[x][y] = 0;
    let count = 1;

    for (let i = 0; i < directions.length; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && grid[nx][ny]) {
        count += DFS(nx, ny);
      }
    }

    return count;
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        const count = DFS(i, j);
        answer = Math.max(answer, count);
      }
    }
  }

  return answer;
};