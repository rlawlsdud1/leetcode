/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const queue = [];
  queue.push([0, 0, 1]);
  grid[0][0] = 1;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    if (x === grid.length - 1 && y === grid[0].length - 1) {
      return distance;
    }

    for (let i = 0; i < directions.length; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid.length &&
        ny < grid[0].length &&
        grid[nx][ny] === 0
      ) {
        grid[nx][ny] = 1;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }

  return -1;
};