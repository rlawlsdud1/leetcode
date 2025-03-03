/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let curr = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < curr) curr = prices[i];
    else {
      profit += prices[i] - curr;
      curr = prices[i];
    }
  }
  return profit;
};