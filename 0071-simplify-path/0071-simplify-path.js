/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  if (path[0] === "/") path = path.slice(1);
  if (path.at(-1) === "/") path = path.slice(0, -1);

  const answer = [];
  const splitedPath = path.split("/");
  splitedPath.forEach((v) => {
    if (v) {
      if (v !== ".." && v !== ".") {
        answer.push(v);
      } else if (v === "..") {
        answer.pop();
      }
    }
  });
  return "/" + answer.join("/");
};