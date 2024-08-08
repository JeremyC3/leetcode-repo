function search(nums: number[], target: number): number {
  // Start a pointer at the middle of nums array 
  // At each iteration, we'll check if num at index is greater, less than, or equal to target
  // If less, move pointer right
  // If greater, move pointer left
  // If equal, return index of target
  // Else, return -1
  console.log('starting a new function now for some reason')
  let p = Math.floor((nums.length - 1) / 2);

  while (p >= 0 && p <= nums.length - 1) {
    console.log('pointer', p)
    if (nums[p] === target) {
      console.log('found target')
      return p;
    } else if (nums[p] < target) {
      console.log('inside else if ', p)
      p++;
    } else if (nums[p] > target) {
      p--;
    }
  }
  // console.log('outside of loop')
  return -1;
};
