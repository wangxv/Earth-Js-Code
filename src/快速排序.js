/**
 * 时间复杂度为O(nlogn)，不稳定
 * 
 * 使用二分法，一直将数组分为左右两边，知道数组的数字等于1
 */

function quickSort(arr) {
  if (list.length <= 1) return arr;

  // 找到中间点
  let mid = Math.floor(list.length / 2);

  // 以中间节点为基准点，比该节点大的值放到right数组中，否则放到left数组中
  let base = list.splice(mid, 1)[0];
  let left = [];
  let right = [];
  list.forEach(item => {
    if (item > base) {
      right.push(item);
    } else {
      left.push(item);
    }
  });
  return quickSort(left).concat(base, quickSort(right));
}