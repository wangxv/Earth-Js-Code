/**
 * 时间复杂度为O(n²)，稳定排序算法
 * 空间复杂度：O(1)
 * 
 * 它重复地遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
 * 遍历数列的工作是重复进行的，直到没有再需要交换的元素为止，这意味着该数列已经排序完成。
 * 
 * 第一轮找到最小的放在第一位上，第二轮找到最小的放在第二位上
 * 前面的部分永远是已经排好序的
 */

function bubbleSort(arr) {
  let length = arr.length;
  let swapped = false; // 减少消耗
  // 外层循环用控制 排序进行多少轮
  for (let i = 0; i < length; i++) {
   // 内层循环用于每一轮的数据比较
    // 注意j的长度范围 length - i - 1
    for (let j = 0; j < length - i - 1; j++) {
      // 相邻元素，大的放到后面
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([2, 5, 7, 4, 3, 9]));