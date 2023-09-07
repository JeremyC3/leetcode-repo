function combinationSum(candidates: number[], target: number): number[][] {
  // let's make a recursive helper function!

  // so I'm gonna store a cache of all unique combos I think???

  // we'll use the helper function to just keep adding a random number each time
  const answerArr: number[][] = [];
  const ansCache: Record<string, number[][]> = { 0: [[]] };
  // iterate through and try every value and increase each time??
  for(let i=0; i<target; i++){
    // first deal with what happens if there's nothing
    if(ansCache[i]===undefined) continue;
    for(const ele of candidates){
      // for candidate, add its value to the remaining values to get new options
    }
  }
  return answerArr;
}

console.log(combinationSum([2, 3], 7));
