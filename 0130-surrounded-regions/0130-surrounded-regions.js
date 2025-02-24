/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  // 경계에 있는 'O'와 연결된 모든 'O'를 찾아서 임시로 'I'로 표시
  function DFS(x, y) {
    if (x < 0 || x >= rows || y < 0 || y >= cols || board[x][y] !== 'O') {
      return;
    }
    board[x][y] = 'I'; // 임시로 'I'로 표시
    DFS(x + 1, y);
    DFS(x - 1, y);
    DFS(x, y + 1);
    DFS(x, y - 1);
  }

  // 1. 경계에서 시작하여 'O'를 찾고, 연결된 모든 'O'를 'I'로 표시
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O') DFS(i, 0); // 왼쪽 경계
    if (board[i][cols - 1] === 'O') DFS(i, cols - 1); // 오른쪽 경계
  }
  for (let j = 0; j < cols; j++) {
    if (board[0][j] === 'O') DFS(0, j); // 위쪽 경계
    if (board[rows - 1][j] === 'O') DFS(rows - 1, j); // 아래쪽 경계
  }

  // 2. 내부의 'O'를 'X'로 바꾸고, 'I'를 'O'로 복원
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'; // 내부의 'O'를 'X'로 바꿈
      } else if (board[i][j] === 'I') {
        board[i][j] = 'O'; // 임시로 표시한 'I'를 'O'로 복원
      }
    }
  }
};