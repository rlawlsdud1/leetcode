/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const visited = Array.from({ length: wordList.length }).fill(false);
  const queue = [];
  queue.push([beginWord, 1]);

  while (queue.length) {
    const [word, count] = queue.shift();
    if (word === endWord) {
      return count;
    }

    for (let i = 0; i < wordList.length; i++) {
      if (checkChange(word, wordList[i]) && visited[i] === false) {
        visited[i] = true;
        queue.push([wordList[i], count + 1]);
      }
    }
  }

  return 0;
};

function checkChange(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  if (count === 1) return true;
  else return false;
}