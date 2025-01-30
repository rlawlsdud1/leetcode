/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const visited = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }).fill(false)
  );

  const candidate = [];

  function DFS(x, y, path) {
    if (path.length === word.length) {
      if (path.join("") === word) {
        candidate.push([...path].join(""));
      }
      return;
    }

    for (let i = 0; i < directions.length; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < board.length &&
        ny < board[0].length &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        path.push(board[nx][ny]);

        DFS(nx, ny, path);
        visited[nx][ny] = false;
        path.pop();
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        visited[i][j] = true;
        DFS(i, j, [word[0]]);
        visited[i][j] = false;
      }
    }
  }

  if (candidate.length) {
    return true;
  }
  return false;
};