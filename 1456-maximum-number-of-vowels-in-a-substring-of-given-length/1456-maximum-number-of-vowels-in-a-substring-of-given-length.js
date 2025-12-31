var maxVowels = function (s, k) {
  const vowelLetters = ["a", "e", "i", "o", "u"];
  const vowelSet = new Set(vowelLetters);

  let answer = 0;
  let temp = 0;

  for (let i = 0; i < k; i++) {
    if (vowelSet.has(s[i])) temp++;
  }

  answer = temp;

  let left = 0; // window를 매 순간 만들지 않기 위한 변수.
  for (let right = k; right < s.length; right++) {
    if (vowelSet.has(s[left++])) temp--;
    if (vowelSet.has(s[right])) temp++;

    answer = Math.max(answer, temp);
  }

  return answer;
};