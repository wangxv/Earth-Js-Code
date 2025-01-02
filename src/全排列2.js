/**
 * 给定一个只包含大写英文字母的字符串S，要求你给出对S重新排列的所有不相同的排列数。
   如：S为ABA，则不同的排列有ABA、AAB、BAA三种。
   A B A
   B A
 */

   function fn(S) {
    let arr = S.split('').sort((a, b) => a.localeCompare(b));
    let result = [];
    let path = [];
    backTracking([]);
    function backTracking(used) {
       if (path.length === S.length) {
         result.push(path.join(''));
         return;
       }
       for (let i = 0; i < arr.length; i++) {
         if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue;
         if (!used[i]) {
             used[i] = true;
             path.push(arr[i]);
             backTracking(used);
             used[i] = false;
             path.pop();
         }
       }
    }

    return result;
  }

  let S = 'ABA';
  let S1 = 'ABCDEFGHHA';
  let S2 = 'AABBCC';
  console.log(fn(S));