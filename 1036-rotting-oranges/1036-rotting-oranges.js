/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const rottenOrange = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rottenOrange.push([i, j, 0]);
      }
    }
  }
  let answer = 0;
  while (rottenOrange.length) {
    const [x, y, count] = rottenOrange.shift();
    answer = Math.max(answer, count);

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid.length &&
        ny < grid[0].length &&
        grid[nx][ny] === 1
      ) {
        grid[nx][ny] = 2;
        rottenOrange.push([nx, ny, count + 1]);
      }
    }
  }
  if (grid.some((v) => v.includes(1))) {
    return -1;
  } else {
    return answer;
  }
};