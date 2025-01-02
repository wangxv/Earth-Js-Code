/**
 * 简单版
 */

function fn(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

/**
 * 复杂版
 */

function fn1(arr1, arr2) {
  const arr = arr1.concat(arr2);
  // 手动去重
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  // 排序冒泡排序

  for (let i = 0; i < res.length - 1; i++) {
    for (let j = 0; j < res.length - i - 1; j++) {
      if (res[j] > res[j + 1]) {
        // 交换
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }

  return res;
}

let arr1 = [1, 2, 5];
let arr2 = [-1, 0, 3, 2];
console.log(fn1(arr1, arr2));