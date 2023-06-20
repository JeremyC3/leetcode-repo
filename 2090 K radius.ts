function getAverages(nums: number[], k: number): number[] {
  const answerArr: number[] = [];
  const dia = 2 * k + 1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    //let's first add the number, then push only if it's past diameter and then append the remaining ones?
    if (i < k || i >= nums.length - k) {
      answerArr.push(-1);
    } else {
      // if this is the first average actually average it out
      if (i === 0 || answerArr[i - 1] === -1) {
        //make an average
        for (let j = i - k; j <= i + k; j++) {
          sum += nums[j];
        }
        answerArr.push(Math.floor(sum / dia));
      } else {
        //otherwise, previous average minus prev plus current
        sum += nums[i + k] - nums[i - k - 1];
        answerArr.push(Math.floor(sum / dia));
      }
    }
  }
  return answerArr;
}
