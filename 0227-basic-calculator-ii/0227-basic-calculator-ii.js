/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim("").split(" ").join("").split("");

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (
      stack.length &&
      Number.isInteger(Number(s[i])) &&
      Number.isInteger(Number(stack.at(-1)))
    ) {
      stack.push(stack.pop() + s[i]);
    } else {
      stack.push(s[i]);
    }
  }

  // multiply, divide
  const md_stack = [];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "*") {
      md_stack.push(Number(md_stack.pop()) * Number(stack[i + 1]));
      i++;
    } else if (stack[i] === "/") {
      md_stack.push(Math.floor(Number(md_stack.pop()) / Number(stack[i + 1])));
      i++;
    } else {
      md_stack.push(stack[i]);
    }
  }

  // add, substract
  const as_stack = [];
  for (let i = 0; i < md_stack.length; i++) {
    if (md_stack[i] === "+") {
      as_stack.push(as_stack.pop() + Number(md_stack[i + 1]));
      i++;
    } else if (md_stack[i] === "-") {
      as_stack.push(as_stack.pop() - Number(md_stack[i + 1]));
      i++;
    } else {
      as_stack.push(Number(md_stack[i]));
    }
  }

  return as_stack[0];
};