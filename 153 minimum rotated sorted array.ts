function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  let min = nums[0];
  while (l < r) {
    //break out of the loop if you're perfectly sorted
    if (nums[l] < nums[r]) {
      return Math.min(nums[l], min);
    }
    const mid = Math.floor((l + r) / 2);
    min = Math.min(min, nums[mid]);
    // find the portion of the graph that's not fully sorted yet
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return Math.min(nums[l], min);
}
