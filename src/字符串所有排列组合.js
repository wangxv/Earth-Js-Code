/**
 * 题目：输入一个字符串，打印出该字符串中，所有字符的排列组合
 * 输入：'abc'
 * 输出：['abc', 'acb', 'bca', 'bac', 'cab', 'cba']
 * 
 * 思路：使用递归
 */

function permute(str) {
  let result = [];

  function generatePermutation(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
    }

    for (let i = 0; i < remaining.length; i++) {
      let newStr = remaining[i];
      const newCurrent = current + newStr;
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);

      generatePermutation(newCurrent, newRemaining);
    }
  }
  generatePermutation('', str);

  return result;
}

console.log(permute('abc'));