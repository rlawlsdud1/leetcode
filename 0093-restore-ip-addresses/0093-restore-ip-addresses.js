/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // backtracking function
  const answer = [];
  function BT(remainAddress, path) {
    if (path.length === 3) {
      if (validateNum(remainAddress)) {
        path.push(remainAddress);

        answer.push([...path].join("."));
        path.pop();
      }
      return;
    }

    for (let i = 1; i < 4; i++) {
      const partialAddress = remainAddress.slice(0, i);

      if (validateNum(partialAddress)) {
        path.push(partialAddress);
        BT(remainAddress.slice(i), path);

        path.pop();
      }
    }
  }

  BT(s, []);
  return answer;
};

function validateNum(num) {
  if (String(Number(num)).length !== num.length) return false;
  if (Number(num) > 255) return false;
  return true;
}
