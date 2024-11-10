/**
 * 给定一个数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合
 * 输入：nums: [5, 2, 1, 1, 3, 4, 6] ；target:8
 * 输出：[[1, 1, 6], [1, 2, 5], [1, 3, 4]]
 * 
 * 解题思路：使用【双端指针】的方式，将三数之和转化为两数之和。
 * 时间复杂度是O(n2)。空间复杂度是O(1)
 */

function findThree(arr, target) {
  if (!arr || !arr.length) return [];
  // 先将数组从小到大排序
  arr.sort(); // sort会改变原数组
  let result = []; // 存储结果的数组

  for (let i = 0; i < arr.length; i++) {
    // 跳过重复的arr[i]值，比如[2, 1, 1]跳过第二个1
    if (i && arr[i] === arr[i - 1]) continue;
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        result.push([arr[i], arr[left++], arr[right--]]);
        while(arr[left] === arr[left - 1]) {
          left++;
        }
        while(arr[right] === arr[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
}

console.log(findThree([5, 2, 1, 1, 3, 4, 6], 8));