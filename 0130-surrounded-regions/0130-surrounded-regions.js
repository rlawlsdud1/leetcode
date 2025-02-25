/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // 테두리에서 DFS 돌려서 바깥이랑 연결돼있는 부분을 I로 바꾼다
  // 마지막으로 board의 모든 원소를 순회하며
  // I를 O로, O를 X로 바꾼다
  const [n, m] = [board.length, board[0].length];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function DFS(x, y) {
    board[x][y] = "I";

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && board[nx][ny] === "O") {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (board[i][0] === "O") DFS(i, 0);
    if (board[i][m - 1] === "O") DFS(i, m - 1);
  }

  for (let j = 0; j < m; j++) {
    if (board[0][j] === "O") DFS(0, j);
    if (board[n - 1][j] === "O") DFS(n - 1, j);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "I") board[i][j] = "O";
      else if (board[i][j] === "O") board[i][j] = "X";
    }
  }
};