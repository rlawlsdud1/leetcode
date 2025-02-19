/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashTable = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");

    if (hashTable[sortedStr]) {
      hashTable[sortedStr].push(strs[i]);
    } else {
      hashTable[sortedStr] = [strs[i]];
    }
  }

  return Object.values(hashTable);
};