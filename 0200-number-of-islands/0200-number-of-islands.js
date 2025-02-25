/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function DFS(x, y) {
    grid[x][y] = "0";
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid.length &&
        ny < grid[0].length &&
        grid[nx][ny] === "1"
      ) {
        DFS(nx, ny);
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        DFS(i, j);
        answer++;
      }
    }
  }

  return answer;
};
