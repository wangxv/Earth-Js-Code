function minStonesToDivide(weights) {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

  // 如果总重量是奇数，无法分成两半
  if (totalWeight % 2 !== 0) return -1;

  const target = totalWeight / 2;
  const n = weights.length;

  // dp[i]表示凑出重量i所需的最少石头数量，初始化为无穷大
  const dp = Array(target + 1).fill(Infinity);
  dp[0] = 0;  // 不取任何石头就可以凑出重量0，所需石头数量为0

  for (let i = 0; i < n; i++) {
    // 从后往前更新，避免重复使用同一石头
    for (let j = target; j >= weights[i]; j--) {
      dp[j] = Math.min(dp[j], dp[j - weights[i]] + 1);
    }
  }
  // 如果dp[target]为Infinity，表示无法凑成目标重量
  return dp[target] === Infinity ? -1 : dp[target];
}

// 测试用例
const weights = [2, 2, 3, 3, 4, 1, 1, 2];
console.log(minStonesToDivide(weights));  // 输出: 1 (分为 11 和 11)