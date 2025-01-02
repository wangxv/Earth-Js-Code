/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 * 
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */

const subarraySum = function(nums, k) {
  const mp = new Map(); // 累加和
  mp.set(0, 1);
  let result = 0, // 非空子序列的个数
      sum = 0; // 和
  for(const x of nums) {
      sum += x
      if(mp.has(sum - k)) {
          result += mp.get(sum - k)
      }
      if(mp.has(sum)) {
          mp.set(sum, mp.get(sum) + 1)
      } else {
          mp.set(sum, 1)
      }
  }
  return result
};