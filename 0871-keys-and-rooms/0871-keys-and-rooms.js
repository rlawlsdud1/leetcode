/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = Array.from({ length: rooms.length }).fill(false);

  visited[0] = true;

  const queue = [];

  rooms[0].forEach((v) => {
    queue.push(v);
  });

  while (queue.length) {
    const key = queue.shift();
    if (!visited[key]) {
      visited[key] = true;

      rooms[key].forEach((v) => {
        queue.push(v);
      });
    }
  }

  if (visited.some((v) => v === false)) {
    return false;
  }
  return true;
};