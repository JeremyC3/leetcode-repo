function trap(height: number[]): number {
  let total = 0;
  // each pt is the lowest between the max left and max right pts
  const leftMax: number[] = new Array(height.length).fill(0);
  const rightMax: number[] = new Array(height.length).fill(0);
  let max = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = max;
    max = Math.max(max, height[i]);
  }
  max = height[height.length - 1];
  for (let j = height.length - 2; j >= 0; j--) {
    rightMax[j] = max;
    const water = Math.min(leftMax[j], rightMax[j]) - height[j];
    if (water > 0) {
      total += water;
    }
    max = Math.max(max, height[j]);
  }

  return total;
}
