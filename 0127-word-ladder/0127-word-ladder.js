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
    const [target, count] = queue.shift();
    // console.log(target, count);

    if (target === endWord) return count;

    for (let i = 0; i < wordList.length; i++) {
      if (!visited[i] && validateWord(target, wordList[i])) {
        queue.push([wordList[i], count + 1]);
        visited[i] = true;
      }
    }
  }

  return 0;

  function validateWord(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }

    if (count > 1) {
      return false;
    }
    return true;
  }
};