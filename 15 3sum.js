// Given an integer array nums
//return all the triplets [nums[i], nums[j], nums[k]]
//such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// input number[]
// output number[][]

var threeSum = function (nums) {
	const ans = [];
	// set up pointer for i
	// iterate through array
	nums = nums.sort((a, b) => a - b); //[ -4, -1, -1, 0, 1, 2 ]
	for (i = 0; i < nums.length - 2; i++) {
		const firstNum = nums[i];
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		// create map to map number to index
		const twoMap = {};
		//keys being the value needed to create a triplet
		//values being the difference from 0
		// iterate through remaining numbers
		for (j = i + 1; j < nums.length; j++) {
			// if any numbers will sum to 0 base on map, add to answer arr
			if (twoMap[nums[j]] !== undefined) {
				console.log(`value j is ${j}, value i is ${i}`); // j=4 i=1, j=4 i =1, j=4, i=2
				const k = twoMap[nums[j]]; //console log
				// add to answer arr
				// brute force, check all answers to see if these are contained
				ans.push([nums[i], nums[j], k]);
			} else {
				const idealSum = (nums[i] + nums[j]) * -1;
				twoMap[idealSum] = nums[j];
			}
		} //consolelog twomap
	}
	return ans; //[[-1,1,0],[-1,2,-1],[-1,1,0]]
};
// i = 0 nums[i] = -1
// j = 1 nums[j] = 0 (we are looking for a value of 1 to complete)
// j=2 nums[j] = 1

// twoMap {1:1} (if you run into a value of 1, complete w/nums[i], your current value of j, and the )

const input1 = [-1, 0, 1, 2, -1, -4],
	input2 = [0, 1, 1],
	input3 = [0, 0, 0];
console.log(threeSum(input1)); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum(input2)); //[]
console.log(threeSum(input3)); //[[0,0,0]]
