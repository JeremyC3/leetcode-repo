const encoder = (num: number): string => {
  let ans = '';
  const romans = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ]);
  romans.forEach((val, key) => {
    while (num > val) {
      ans += key;
      num -= val;
    }
  });
  return ans;
};
function combinationSum(candidates: number[], target: number): number[][] {
  // let's make a recursive helper function!
  candidates.push(5)
  // we'll use the helper function to just keep adding a random number each time
  const dfs = (numArr: number[], goalNum: number):void =>  {
    for()
  }
};