/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegree = Array.from({ length: numCourses }).fill(0);
  const adjacantList = Array.from({ length: numCourses }, () => []);

  prerequisites.forEach((v) => {
    const [a, b] = v;
    adjacantList[b].push(a);
    indegree[a] += 1;
  });

  const queue = [];
  let count = 0;

  for (let i = 0; i < numCourses; i++) {
    if (!indegree[i]) {
      queue.push(i);
      count++;
    }
  }

  while (queue.length) {
    const node = queue.shift();

    for (let i = 0; i < adjacantList[node].length; i++) {
      const adjacantNode = adjacantList[node][i];

      indegree[adjacantNode] -= 1;
      if (!indegree[adjacantNode]) {
        queue.push(adjacantNode);
        count++;
      }
    }
  }

  return count === numCourses;
};