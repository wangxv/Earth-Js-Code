/**
 * 时间复杂度：平均O(n²),空间复杂O(1)
 * 
 * 它的工作原理是通过构建有序序列，对于未排序数据，
 * 在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，找到相应位置并插入时，不需要将已排序序列的元素全部移动。
 * 
 * 
 * 如果前一个大于后一个，则交换两个的位置
 */

function insertionSort(arr) {
  let len = arr.length;
  let key, j;

  for (let i = 1; i < len; i++) {
    key = arr[i]; // 取出当前要排序的元素
    j = i - 1;

    // 在已排序序列中从后向前扫描，找到插入位置
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // 向后移动元素
      j--;
    }
    arr[j + 1] = key; // 插入元素
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));