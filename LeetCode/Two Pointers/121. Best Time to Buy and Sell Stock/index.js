/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sellIdx = prices.length - 1;
  let profit = 0;

  for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
    if (prices[sellIdx] - prices[buyIdx] > 0) {
      profit = Math.max(prices[sellIdx] - prices[buyIdx], profit);
    } else {
      sellIdx = buyIdx;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([7])); // 0

// [7,1,5,3,6,4]
//            s
//        b
