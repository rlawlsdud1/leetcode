/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let current = prices[0];
  let profit = 0;

  // 최대한 가격이 낮을 때 사야, 최대한의 이득을 볼 가능성이 생긴다
  for (let i = 1; i < prices.length; i++) {
    if (current > prices[i]) current = prices[i];
    profit = Math.max(profit, prices[i] - current);
  }

  return profit;
};