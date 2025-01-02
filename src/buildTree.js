class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function arrToTree(arr) {
  if (!arr.length) return null;
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

function fn(arr) {
  const root = arrToTree(arr);
  console.log(root);
  // 后序遍历：左右中
  let result = []
  let stack = root ? [root] : [];
  while(stack.length) {
    let node = stack.pop();
    if (node && !node.left && !node.right) {
      // 叶子节点
      continue;
    }
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }
    stack.push(node);
    stack.push(null);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(fn(arr));