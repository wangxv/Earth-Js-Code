/**
 * 时间复杂度为O(n²)，不稳定；空间复杂度O(1)
 * 
 * 比较相邻两个元素的大小，一直对比到最后一个元素，最大的元素到了最后一位
 * 继续，知道所有执行完毕
 */

function selectionSort(arr) {
  let len = arr.length;
  let minIndex;

  // 外层循环控制遍历次数
  for (let i = 0; i < len - 1; i++) {
    // 假设当前位置i是最小值的索引
    minIndex = i;

    // 内层循环寻找未排序部分的最小值
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 更新最小值的索引
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 6, 7, 1]));