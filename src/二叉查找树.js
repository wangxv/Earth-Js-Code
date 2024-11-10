/**
 * 题目：判断一个数组，是否为某二叉查找树的前序遍历结果，
 * 二叉查找树特点是所有的左节点比父节点的值小，所有的右节点比父节点的值大
 * 输入：[5, 3, 2, 1, 4, 6, 7, 8, 9]
 * 输出：true
 * 
 * 
 * 前序遍历：根左右
 * 中序遍历：左根右
 * 后序遍历：左右根
 */

function preOrderOfBST(list) {
  if (list && list.length > 0) {
    // 前序遍历，第一个值为根节点
    var root = list[0];
    // 找到数组中，第一个比根节点大的节点，即为右子树的节点
    for (var i = 0; i < list.length; i++) {
      if (list[i] > root) {
        break;
      }
    }
    // 遍历右子树的节点，要求所有右子树的节点都比根节点大
    for (let j = i; j < list.length; j++) {
      if (list[j] < root) {
        return false;
      }
    }
    var left = true;
    // 同理，递归判断左子树是否符合二叉查找树的规则
    if (i > 1) {
      left = preOrderOfBST(list.slice(1, i + 1));
    }
    var right = true;
    // 递归判断右子树是否符合二叉查找树的规则
    if (i < list.length) {
      right = preOrderOfBST(list.slice(i, list.length));
    }
    // 左、右子树都符合要求，则是一个二叉查找树
    return left && right;
  }
}

console.log(preOrderOfBST([5, 3, 2, 1, 4, 6, 7, 8, 9]));