/**
 * 利用回溯算法，找到和为某一值的路径
 * 题目：查找二叉树和为某一值的路径
 * 输入：二叉树结构如下，找到和为 11 的所有路径
 * 
 * 输出：[[5, 3, 2, 1], [5, 6]]
 */

/**
 * 
 * @param {*} node 二叉树
 * @param {*} num 目标值
 * @param {*} stack 栈
 * @param {*} sum 当前路径的和
 * @param {*} result 存储所有结果
 */
function findPath(node, num, stack = [], sum = 0, result = []) {
  stack.push(node.data);
  sum += node.data;

  // 找到所有的节点路径（包含叶子节点和子节点的所有情况之和）
  if (sum === num) {
    result.push(stack.slice());
  }
  if (node.left) {
    findPath(node.left, num, stack, sum, result);
  }
  if (node.right) {
    findPath(node.right, num, stack, sum, result);
  }
  // 回溯算法：不符合要求，退回来，换一条路再试
  // 叶子节点直接pop；子节点中的所有的节点递归完成后再pop
  stack.pop();
  return result;
}
