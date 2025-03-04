/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegreeTable = Array.from({ length: numCourses }).fill(0);
  const adjacantList = Array.from({ length: numCourses }, () => []);

  prerequisites.forEach((v) => {
    const [a, b] = v;
    adjacantList[b].push(a);
    indegreeTable[a] += 1;
  });

  let count = 0;
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (!indegreeTable[i]) {
      queue.push(i);
      count++;
    }
  }

  while (queue.length) {
    const node = queue.shift();
    for (let i = 0; i < adjacantList[node].length; i++) {
      const adjacantNode = adjacantList[node][i];

      indegreeTable[adjacantNode] -= 1;
      if (!indegreeTable[adjacantNode]) {
        queue.push(adjacantNode);
        count++;
      }
    }
  }

  return count === numCourses;
};