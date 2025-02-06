/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array.from({length:amount+1}).fill(Infinity)
    dp[0] = 0
    for(let i=1; i<=amount; i++){
        for(let j=0; j<coins.length; j++){
            if(coins[j] <= i){
                dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1) 
            }
        }
    }
    if(dp[amount] === Infinity){
        return -1
    }else{
        return dp[amount]
    }

};