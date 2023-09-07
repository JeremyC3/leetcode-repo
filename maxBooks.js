const maximumBooks = (books) => {
  const n = books.length;
  const dp = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      books[stack[stack.length - 1]] >= books[i] - (i - stack[stack.length - 1])
    ) {
      stack.pop();
    }
    
    const j = stack.length > 0 ? stack[stack.length - 1] : -1;

    const lastTook = books[i] - (i - j) + 1;

    if (lastTook > 1) {
      dp[i] = ((books[i] + lastTook) * (i - j)) / 2;
    } else {
      dp[i] = (books[i] * (books[i] + 1)) / 2;
    }

    if (j >= 0) {
      dp[i] += dp[j];
    }

    stack.push(i);
  }

  return Math.max(...dp);
};

console.log(maximumBooks([7, 4, 5, 2, 6, 5]))