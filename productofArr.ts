const getAllProducts = (array: number[]): number[] => {
  const prefix = new Array(array.length);
  const suffix = new Array(array.length);
  // iterate through the given array (l->r)
  for (let i = 0; i < array.length; i++) {
    // for each position, update the prefix arr by taking prev. prefix ele * prev. arr ele
    if (i === 0) prefix[i] = 1;
    else {
      prefix[i] = prefix[i - 1] * array[i - 1];
    }
  }

  // iterate through the given array (r->l)
  for (let j = array.length - 1; j >= 0; j--) {
    // for each position, update the suffix arr by taking prev. suffix ele * prev. arr ele
    if (j === array.length - 1) suffix[j] = 1;
    else {
      suffix[j] = suffix[j + 1] * array[j + 1];
    }
  }
  // smush both together
  return prefix.map((ele, ind) => ele * suffix[ind]);
};

export const findOdd = (xs: number[]): number => {
  //rn at best I can only think of how to do this in O(n^2) time,  iterating once to get rates and then again to get the odd one.
  //declare map to watch them all, iterate through arr then get the infrequent one
  const odds: Record<number, boolean> = {};

  for (const ele of xs) {
    //if the element exists, then it should be removed. if it doesn't exist, add it
    if (!odds[ele]) {
      odds[ele] = true;
    } else {
      delete odds[ele];
    }
  }

  //return the only remaining value in the odds object, feat. some annoying type coercion that 100% can be done better
  return Number(Object.keys(odds)[0]);
};
