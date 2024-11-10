/**
 * 题目：输入一个字符串，找到第一个不重复字符的下标
 * 输入：'abcabcde'
 * 输出：6
 * 
 * 时间复杂度O(n)、 空间复杂度O(n)
 */

function findOneStr(str) {
  if (!str) return -1;

  let map = {}; // 使用map存储每个字符出现的次数
  let arr = str.split('');

  arr.forEach((item) => {
    const val = map[item];
    map[item] = val ? val + 1 : 1;
  });
  // 再遍历一遍找到出现1次的下标
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      return i;
    }
  }

  return -1;
}
console.log(findOneStr('abcabcde'));
