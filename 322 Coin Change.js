// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	// make a map of value : smallest value
	const coinMap = { 0: 0 };
	// for each coin, map the value to the min # of coins required to reach it
	let minVal = 0;
	while (minVal < amount) {

		// for the lowest number, add in all possible coins, only save the best result
		const currCoins = coinMap[minVal];
		for (const val of coins) {
			const newVal = val + minVal;
			if (coinMap[newVal] == undefined || currCoins + 1 < coinMap[newVal]) {
				coinMap[newVal] = currCoins + 1;
			}
		}
		// after you add in the new potential results, remove the explored value and keep going
		delete coinMap[minVal];
		// find the lowest value mapped value and keep going
		const leftKeys = Object.keys(coinMap);
		if (leftKeys.length == 0) {
			return -1;
		} else {
			minVal = leftKeys.reduce((acc, curr) =>
				Math.min(Number(acc), Number(curr))
			);
			minVal = Number(minVal);
		}
	}
	return minVal == amount ? coinMap[minVal] : -1;
};

// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 12));
