/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLogs = [];
  const digisLogs = [];

  logs.forEach((v) => {
    const splitedLog = v.split(" ");
    if (Number.isInteger(Number(splitedLog[1]))) {
      digisLogs.push(v);
    } else {
      letterLogs.push(v);
    }
  });
  console.log(letterLogs);

  const compare = (a, b) => {
    const n = a
      .slice(a.indexOf(" ") + 1)
      .localeCompare(b.slice(b.indexOf(" ") + 1));
    if (n) return n;
    return a[0].localeCompare(b[0]);
  };

  letterLogs.sort(compare);

  return letterLogs.concat(digisLogs);
};