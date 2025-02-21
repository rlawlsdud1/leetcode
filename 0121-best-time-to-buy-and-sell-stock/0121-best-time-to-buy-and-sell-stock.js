/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let curr = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < curr) curr = prices[i];
    profit = Math.max(profit, prices[i] - curr);
  }

  return profit;
};