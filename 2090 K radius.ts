function getAverages(nums: number[], k: number): number[] {
  const answerArr: number[] = Array(nums.length).fill(-1);
  const dia = 2 * k + 1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // start summing up the values
    sum += nums[i];
    if (i >= dia) sum -= nums[i - dia];

    // add the one i+k away
    if (i >= dia - 1) {
      answerArr[i - k] = Math.floor(sum / dia);
    }
  }
  return k ? answerArr : nums;
}
