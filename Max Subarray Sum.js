var maxSequence = function (arr) {
  // start adding from left to right
  let tempSum = 0;
  // when you hit a negative # figure out if you needed to keep any of the prev stuff
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    // if you hit a negative number, figure out if the numbers so far are worth keeping
    if (ele < 0) {
      //if the numbers are useless just trash them
      if (tempSum + ele < 0) {
        console.log(tempSum);
        console.log(ele);
        //workaround for tempSum adding ele either way
        maxSum = Math.max(tempSum, maxSum);
        tempSum = 0 - ele;
      }
      
    }
    tempSum += ele;
  }
  return Math.max(tempSum, maxSum);
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
