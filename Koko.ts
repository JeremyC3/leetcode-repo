function minEatingSpeed(piles: number[], h: number): number {
  // let's scale up? start from smallest number and then increase and keep trying?
  const sortPiles = [...piles].sort((a, b) => a - b);
  let k = sortPiles[0];
  while (sortPiles.reduce((acc, val) => acc + Math.ceil(val / k), 0) > h) {
    k++;
  }
  return k;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
