var totalFruit = function (fruits) {
  let left = 0,
    answer = 0;
  const hashTable = {};
  let uniqueFruits = 0; // 현재 윈도우 내의 과일 종류 수를 추적

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];
    // 현재 과일을 해시 테이블에 추가
    if (!hashTable[fruit]) uniqueFruits++; // 새로운 과일 종류인 경우
    hashTable[fruit] = (hashTable[fruit] || 0) + 1;

    // 과일 종류가 2개를 초과하면 윈도우를 줄임
    while (uniqueFruits > 2) {
      const leftFruit = fruits[left];
      hashTable[leftFruit] -= 1; // left 포인터가 가리키는 과일 개수 줄이기
      if (hashTable[leftFruit] === 0) {
        delete hashTable[leftFruit]; // 개수가 0이면 해시 테이블에서 제거
        uniqueFruits--; // 과일 종류 수 감소
      }
      left++; // left 포인터 이동
    }

    // 최대 길이 갱신
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};