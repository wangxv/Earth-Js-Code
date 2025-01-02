class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function arrToTree(arr) {
  if (!arr || !arr.length) return null;

  let root = new TreeNode(arr[0])
  let queue = [root];
  let i = 1;

  while(i < arr.length) {
    let node = queue.shift();

    if (i < arr.length) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
      i++;
    }

    if (i < arr.length) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
      i++;
    }
  }

  return root;
}


/**
 * 前序遍历：中左右
 * 
 * 右左中
 */

function fn(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];
  while(stack.length) {
    let node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }

    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    stack.push(node);
    stack.push(null);
  }
  return result;
}

/**
 * 中序遍历：左中右
 * 右中左
 */

function fnMid(root) {
  if (!root) return;

  let stack = [root];
  let result = [];
  while(stack.length) {
    let node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }

    node.right && stack.push(node.right);
    stack.push(node);
    stack.push(null);
    node.left && stack.push(node.left);
  }

  return result;
}

/**
 * 后续遍历：左右中
 * 中左右
 * 
 */
function fnBack(root) {
  if (!root) return;

  let stack = [root];
  let result = [];

  while(stack.length) {
    let node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }

    stack.push(node);
    stack.push(null);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result;
}

/**
 * 层序遍历，使用queue
 */
function fnCen(root) {
  if (!root) return;

  let queue = [root];
  let result = [];

  while(queue.length) {
    let len = queue.length;
    let levelArr = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      levelArr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelArr);
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let root = arrToTree(arr);
console.log(fnCen(root));
console.log(fn(root));
console.log(fnMid(root));
console.log(fnBack(root));