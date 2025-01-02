/**
 * 
 * 题目描述：A、B两个人玩抢7游戏，游戏规则为A先报一个起始数字X(10<起始数字<10000)，
 * B报下一个数字Y(X-Y<3),A再报一个数字Z(Y-Z<3)，以此类推，直到其中一
  个抢到7，抢到7即为胜者；在B赢得比赛的情况下，一共有多少种组合？
  输入描述：起始数字M，如100；10<=M<=10000
  输出描述：B能赢得比赛的组合次数
 */

  function fn (M) {
    // 使用一个缓存对象来存储已经计算过的状态
    const memo = {};

    // 递归函数，x 表示当前数字，turn 表示当前轮到的玩家（A: 0, B: 1）
    function dfs(x, turn) {
        // 如果当前数字是7且是B的回合，则B获胜
        if (x === 7) {
            return turn === 1 ? 1 : 0;
        }

        // 如果超出范围，返回0
        if (x < 1 || x > 10000) {
            return 0;
        }

        // 检查缓存是否存在结果
        const key = `${x}-${turn}`;
        if (memo[key] !== undefined) {
            return memo[key];
        }

        let result = 0;

        if (turn === 0) { // A的回合
            // A可以选择 x-2, x-1, x+1, x+2 作为下一个数字
            for (let i = -2; i <= 2; i++) {
                if (i !== 0) {
                    result += dfs(x + i, 1); // 轮到B的回合
                }
            }
        } else { // B的回合
            // B可以选择 x-2, x-1, x+1, x+2 作为下一个数字
            for (let i = -2; i <= 2; i++) {
                if (i !== 0) {
                    result += dfs(x + i, 0); // 轮到A的回合
                }
            }
        }

        // 将结果存入缓存并返回
        memo[key] = result;
        return result;
    }

    // 从初始数字M开始，B的回合为1
    return dfs(M, 1);
  
  }

  // 示例：输入100，输出B能赢的组合数
  let M = 100; 
  let result = fn(M);
  console.log(result);  // 输出B能赢的组合数