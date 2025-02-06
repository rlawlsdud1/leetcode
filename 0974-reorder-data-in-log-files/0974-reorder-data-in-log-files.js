/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLogs = [];
  const digitLogs = [];

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i].split(" ");
    if (Number.isInteger(Number(log[1]))) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  const sortingFunc = (a, b) => {
    const n = a.slice(1).join(",").localeCompare(b.slice(1).join(","));
    // n이 -1이라면 a가 b보다 먼저 온다
    if (n === 0) return a[0].localeCompare(b[0]);
    return n;
  };

  letterLogs.sort(sortingFunc);
  const answer = [];

  letterLogs.forEach((v) => {
    answer.push(v.join(" "));
  });
  digitLogs.forEach((v) => {
    answer.push(v.join(" "));
  });
  return answer;
};