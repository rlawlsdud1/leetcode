/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let answer = 0;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [i + directions[k][0], j + directions[k][1]];
          if (nx >= 0 && ny >= 0 && nx < grid.length && ny < grid[0].length) {
            if (!grid[nx][ny]) {
              answer++;
            }
          } else {
            answer++;
          }
        }
      }
    }
  }

  return answer;
};