/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const indegreeTable = Array.from({ length: numCourses }).fill(0);
  const adjacantList = Array.from({ length: numCourses }, () => []);

  prerequisites.forEach((v) => {
    const [a, b] = v;
    adjacantList[b].push(a);
    indegreeTable[a] += 1;
  });

  const answer = [];
  let count = 0;
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (!indegreeTable[i]) {
      count++;
      queue.push(i);
      answer.push(i);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    for (let i = 0; i < adjacantList[node].length; i++) {
      const adjacantNode = adjacantList[node][i];

      indegreeTable[adjacantNode] -= 1;

      if (!indegreeTable[adjacantNode]) {
        queue.push(adjacantNode);
        answer.push(adjacantNode);
        count++;
      }
    }
  }

  if (count === numCourses) return answer;
  return [];
};