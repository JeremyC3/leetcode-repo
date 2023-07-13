function permute(nums: number[]): number[][] {
  // permutation = take it or take it, so I can either put it in front or behind.
  // iterative solution!
  const answerArr: number[][] = [[nums[0]]];
  //iterate through the remaining numbers
  for (let i = 1; i < nums.length; i++) {
    const ele = nums[i];
    // set length before actually iterating through everybody
    const tempAns = answerArr.length;
    // console.log(answerArr);
    for (let j = 0; j < tempAns; j++) {
      const arr = answerArr[j];
      // push to every valid point in the list???
      for (let k = 0; k < i; k++) {
        const newAns = [...arr];
        newAns.splice(k, 0, ele);
        answerArr.push(newAns);
      }
      answerArr[j].push(ele);
    }
  }
  return answerArr;
}
