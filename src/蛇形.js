
function fn(n) {
  let arr = Array.from({length: n}, () => Array(n).fill(0));
  let num = 1;
  // 填充第一列对角线
  for (let i = 0; i < n; i++) {
      let row = i, col = 0;
      while(row >= 0 && col < n) {
          arr[row][col] = num++;
          row--;
          col++;
      }
  }
  for (let i = 0; i < n; i++) {
      console.log(arr[i].join(' '));
  }
  // 填充第一行对角线
  // for (let j = 1; j < n; j++) {
  //     let row = n - 1, col = j;
  //     while(row >= 0 && col < n) {
  //         arr[row][col] = num++;
  //         row--;
  //         col++;
  //     }
  // }

  // for (let i = 0; i < n; i++) {
  //     console.log(arr[i].join(' '));
  // }
}
fn(5)