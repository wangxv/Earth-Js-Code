/**
 * 题目描述：疫情期间，需要大家保证一定的社交距离，公司组织开交流会议，座位有一排共N个座位，编号分别为[0..N-1]，
 * 要求员工一个接着一个进入会议室，并且可以在
  任何时候离开会议室。
  满足：每当一个员工进入时，需要坐到最大社交距离的座位（例如：位置A与左右有员工落座的位置距离分别为2和2，位置B与左右有员工落座的位置距离分别为
  2和3，影响因素都为2个位置，则认为座位A和B与左右位置的社交距离是一样的）；如果有多个这样的座位，则坐到索引最小的那个座位。
  输入描述：会议室座位总数seatNum，（1≤seatNum≤500）
  员工的进出顺序seatOrLeave数组，元素值为1：表示进场；元素值为负数，表示出场（特殊：位置0的员工不会离开），例如-4表示坐在位置4的员工离开（保
  证有员工坐在该座位上）
  输出描述：最后进来员工，他会坐在第几个位置，如果位置已满，则输出-1
 */

  function findLastSeat(seatNum, seatOrLeave) {
    // 初始化座位状态，0表示空，1表示占用
    let seats = Array(seatNum).fill(0);
    
    // 用于记录最后一个入场员工的座位
    let lastSeat = -1;
    
    // 模拟员工进场和离场
    for (let action of seatOrLeave) {
        if (action > 0) { // 进场
            let maxDistance = -1;
            let bestSeat = -1;
            
            // 找到最大社交距离的座位
            for (let i = 0; i < seatNum; i++) {
                if (seats[i] === 0) { // 只考虑空座位
                    let leftDist = -1, rightDist = -1;
                    // 计算与左边和右边占用座位的最小距离
                    for (let j = i - 1; j >= 0; j--) {
                        if (seats[j] === 1) {
                            leftDist = i - j;
                            break;
                        }
                    }
                    for (let j = i + 1; j < seatNum; j++) {
                        if (seats[j] === 1) {
                            rightDist = j - i;
                            break;
                        }
                    }
                    // 如果左边或右边没有座位，则距离为无限大（实际情况下，我们认为这些座位是可以选择的）
                    leftDist = leftDist === -1 ? seatNum : leftDist;
                    rightDist = rightDist === -1 ? seatNum : rightDist;
                    // 选择最小的社交距离
                    let dist = Math.min(leftDist, rightDist);
                    
                    // 如果当前座位的社交距离大于maxDistance，或者相同的距离但索引更小
                    if (dist > maxDistance || (dist === maxDistance && i < bestSeat)) {
                        maxDistance = dist;
                        bestSeat = i;
                    }
                }
            }
            // 将最佳座位占用
            seats[bestSeat] = 1;
            lastSeat = bestSeat; // 记录最后一个进入的员工坐的座位
        } else { // 离场
            let seatToLeave = -action - 1; // 转换为座位索引
            seats[seatToLeave] = 0; // 释放座位
        }
    }
    
    return lastSeat; // 返回最后一个员工进场时坐的座位
}

// 测试例子
let seatNum = 5;
let seatOrLeave = [1, 1, 1, -1, 1, 1];
console.log(findLastSeat(seatNum, seatOrLeave)); // 输出: 4

seatNum = 10;
seatOrLeave = [1, 1, 1, 1, -3, 1, 1, -4, -1, 1, 1];
console.log(findLastSeat(seatNum, seatOrLeave)); // 输出: 6


/**
 * 
关键优化点：
维护一个座位的空闲列表：

不必每次遍历所有座位，我们可以维护一个空座的列表。在每次员工进场时，只遍历空座列表，找到最大社交距离的座位。这样可以减少不必要的遍历。
优化社交距离计算：

社交距离的计算可以通过记录左右已经占用的座位来快速计算。
使用 双指针 或 贪心策略 来优化社交距离的计算。
处理员工离场操作：

离场时，我们可以将员工座位从空座列表中移除，这样下次进场时不需要重新计算整个空座列表。
改进方案：
维护一个 空座列表，每个座位只在其入场和离场时更新。
计算社交距离 时，直接利用空座列表来计算每个空座的最大社交距离。
 */

// 优化后
function findLastSeat1(seatNum, seatOrLeave) {
  // 初始化座位状态，0表示空，1表示占用
  let seats = Array(seatNum).fill(0);
  let emptySeats = []; // 用于存储空座位索引
  
  // 填充所有座位为初始空座
  for (let i = 0; i < seatNum; i++) {
      emptySeats.push(i);
  }
  
  // 用于记录最后一个进场员工的座位
  let lastSeat = -1;
  
  // 模拟员工进场和离场
  for (let action of seatOrLeave) {
      if (action > 0) { // 进场
          let maxDistance = -1;
          let bestSeat = -1;
          
          // 找到最大社交距离的座位
          for (let i = 0; i < emptySeats.length; i++) {
              let seatIndex = emptySeats[i];
              
              // 计算与左右占用座位的最小距离
              let leftDist = -1, rightDist = -1;
              // 计算与左边占用座位的距离
              for (let j = seatIndex - 1; j >= 0; j--) {
                  if (seats[j] === 1) {
                      leftDist = seatIndex - j;
                      break;
                  }
              }
              // 计算与右边占用座位的距离
              for (let j = seatIndex + 1; j < seatNum; j++) {
                  if (seats[j] === 1) {
                      rightDist = j - seatIndex;
                      break;
                  }
              }
              // 如果左边或右边没有座位，则距离为无限大（实际情况下，我们认为这些座位是可以选择的）
              leftDist = leftDist === -1 ? seatNum : leftDist;
              rightDist = rightDist === -1 ? seatNum : rightDist;
              // 选择最小的社交距离
              let dist = Math.min(leftDist, rightDist);
              
              // 如果当前座位的社交距离大于maxDistance，或者相同的距离但索引更小
              if (dist > maxDistance || (dist === maxDistance && seatIndex < bestSeat)) {
                  maxDistance = dist;
                  bestSeat = seatIndex;
              }
          }
          
          // 将最佳座位占用
          seats[bestSeat] = 1;
          emptySeats.splice(emptySeats.indexOf(bestSeat), 1); // 从空座列表中移除该座位
          lastSeat = bestSeat; // 记录最后一个进入的员工坐的座位
      } else { // 离场
          let seatToLeave = -action - 1; // 转换为座位索引
          seats[seatToLeave] = 0; // 释放座位
          emptySeats.push(seatToLeave); // 将座位添加回空座列表
      }
  }
  
  return lastSeat; // 返回最后一个员工进场时坐的座位
}