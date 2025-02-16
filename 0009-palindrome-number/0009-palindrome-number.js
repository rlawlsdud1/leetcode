/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    const reversedNum = Number(String(x).split("").reverse().join(""));
    if (reversedNum === x) {
      return true;
    } else {
      return false;
    }
  }
};