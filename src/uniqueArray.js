/**
 * 数组手动去重，不用高级方法
 * @param {*} arr 数组
 * @returns 去重后的数组
 */
function uniqueArray(arr) {
  let obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(uniqueArray(arr)); // [1, 2, 3, 4, 5]