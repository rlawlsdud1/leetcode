/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  // DFS 돌려서 네트워크들 구하고
  // 각 네트워크가 1로 둘러싸여 있는지 체크하는 함수 만들어서
  // 맞다면 +1

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function DFS(x, y, network) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid.length &&
        ny < grid[0].length &&
        !grid[nx][ny]
      ) {
        grid[nx][ny] = 1;
        network.push([nx, ny]);

        DFS(nx, ny, network);
      }
    }
  }

  const candidate = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!grid[i][j]) {
        grid[i][j] = 1;

        const network = [[i, j]];
        DFS(i, j, network);

        candidate.push(network);
      }
    }
  }

  function validateIsland(network) {
    for (let i = 0; i < network.length; i++) {
      const [x, y] = network[i];
      if (x === grid.length - 1 || x === 0) return false;
      if (y === grid[0].length - 1 || y === 0) return false;
    }
    return true;
  }

  let answer = 0;
  candidate.forEach((v) => {
    if (validateIsland(v)) answer++;
  });

  return answer;
};