/**
 * 时间复杂度为O(nlogn)，稳定;空间复杂度O(n)
 * 采用分治法（Divide and Conquer）策略来把一个数组分成较小的子数组，
 * 递归地排序这些子数组，然后再将它们合并成一个有序的数组
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let num = Math.floor(len / 2);
  let left = mergeSort(array.slice(0, num));
  let right = mergeSort(arr.slice(num, arr.length));

  return merge(left, right);

  function merge(left, right) {
    let [l, r] = [0, 0];
    let result = [];

    // 从left和right区域中各个取出第一个元素，比较它们的大小
    while(l < left.length && r < right.length) {
      // 将较小的元素添加到result中，然后从较小元素所在的区域内取出下一个元素，继续进行比较；
      if (left[l] < right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }
    // 如果 left 或者 right 有一方为空，则直接将另一方的所有元素依次添加到result中
    result = result.concat(left.slice(l, left.length));
    result = result.concat(right.slice(r, right.length));
    return result;
  }
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));