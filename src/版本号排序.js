/**
 * 题目：输入一组版本号，输出从大到小的排序
 * 输入：['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
 * 输出：['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']
 * 
 * 先比较第一位，第一位大的派在前面
 * 第一位相同的比较第二位，以此类推
 */

function versionSort(arr) {
  if (!arr || !arr.length) return [];

  return arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    while(true) {
      const s1 = arr1[i];
      const s2 = arr2[i];
      i++;
      // 若s1 或 s2 不存在，说明相同的位置已比较完成，接下来比较arr1 与 arr2的长度，长的版本号大
      if (arr1[i] === undefined || arr2[i] === undefined) {
        return arr2.length - arr1.length;
      }
      if (s1 === s2) continue;
      // 比较相同位置的数字大小
      return s2 - s1;
    }
  });
}

console.log(versionSort(['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']));