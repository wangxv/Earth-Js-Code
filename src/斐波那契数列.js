/**
 * 题目：从第3项开始，当前项等于前两项之和：1 1 2 3 5 8 13 21 ……，计算第n项的值
 * 输入：10
 * 输出：89
 * 
 *  使用动态规划，将复杂的问题拆分，也就是：`F(N) = F(N - 1) + F(N - 2)`，用数组将已经计算过的值存起来
 */

function fib(num) {
  if (num < 2) return 1;

  let dp = [1, 1];

  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[num];
}

console.log(fib(10));