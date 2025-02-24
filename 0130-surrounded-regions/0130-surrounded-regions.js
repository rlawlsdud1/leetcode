/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function DFS1(x, y) {
    board[x][y] = "I";

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];

      if (
        nx >= 1 &&
        ny >= 1 &&
        nx < board.length - 1 &&
        ny < board[0].length - 1 &&
        board[nx][ny] === "O"
      ) {
        DFS1(nx, ny);
      }
    }
  }

  for (let j = 0; j < board[0].length; j++) {
    if (board[0][j] === "O") {
      DFS1(0, j);
    }
    if (board[board.length - 1][j] === "O") {
      DFS1(board.length - 1, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === "O") {
      DFS1(i, 0);
    }
    if (board[i][board[0].length - 1] === "O") {
      DFS1(i, board[0].length - 1);
    }
  }

  function DFS2(x, y) {
    board[x][y] = "X";

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + directions[i][0], y + directions[i][1]];

      if (
        nx >= 1 &&
        ny >= 1 &&
        nx < board.length - 1 &&
        ny < board[0].length - 1 &&
        board[nx][ny] === "O"
      ) {
        DFS2(nx, ny);
      }
    }
  }

  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board[0].length - 1; j++) {
      if (board[i][j] === "O") {
        DFS2(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "I") {
        board[i][j] = "O";
      }
    }
  }

  return board;
};