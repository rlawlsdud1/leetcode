var longestPalindrome = function (s) {
  let count = 1;
  let answer = "";

  for (let i = 0; i < s.length - 1; i++) {
    let left = i - Math.ceil(count / 2) + 1;
    let right = i + Math.ceil(count / 2);

    let front = s.slice(left, i + 1);
    let back = s.slice(i + 1, right + 1);

    while (left >= 0 && right < s.length && checkPalindrome(front, back)) {
      if (count < front.length * 2) {
        count = front.length * 2;
        answer = front + back;
      }
      front = s.slice(--left, i + 1);
      back = s.slice(i + 1, ++right + 1);
    }
  }

  for (let i = 1; i < s.length - 1; i++) {
    let left = i - Math.floor(count / 2);
    let right = i + Math.floor(count / 2);

    let front = s.slice(left, i);
    let back = s.slice(i + 1, right + 1);

    while (left >= 0 && right < s.length && checkPalindrome(front, back)) {
      if (count < front.length * 2 + 1) {
        count = front.length * 2 + 1;
        answer = front + s[i] + back;
      }
      front = s.slice(--left, i);
      back = s.slice(i + 1, ++right + 1);
    }
  }
  if (count === 1) return s[0];
  return answer;
};

function checkPalindrome(front, end) {
  return front === end.split("").reverse().join("");
}