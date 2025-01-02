/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
    示例：

    输入：s = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
    提示：

    1 <= target <= 10^9
    1 <= nums.length <= 10^5
    1 <= nums[i] <= 10^5

    思路一：暴力解法
    循环查找符合条件的子数组

    滑动窗口

 */

function minArr(s, nums) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let arr = [nums[i]];
    let sum = nums[i];
    let j = i + 1;

    // 和大于目标值终止
    while(sum < s && j < nums.length) {
      arr.push(nums[j]);
      sum += nums[j];
      j++;
      if (sum === s) {
        result = result.length && arr.length > result.length ? result : [...arr] ;
      }
    }
  }

  return result;
}

function newMinArr(s, nums) {

}