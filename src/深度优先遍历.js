/**
 * 深度优先遍历
 * 题目：对树进行遍历，从第一个节点开始，遍历其子节点，直到它的所有子节点都被遍历完毕，然后再遍历它的兄弟节点
 * 输入：如下
 * 输出：[1, 3, 4, 2, 5]
 */

// 递归版本
function deepTree(tree, arr = []) {
  if (!tree || !tree.length) return arr;

  tree.forEach(data => {
    arr.push(data.id);
    // 遍历子树
    data.children && deepTree(data.children, arr);
  });

  return arr;
}

// 非递归版本
function deepTree1(tree) {
  if (!tree || !tree.length) return;

  let arr = [];
  let stack = [];

  // 先将第一层节点放入栈
  for (let i = 0, len = tree.length; i < len; i++) {
    stack.push(tree[i]);
  }
  let node;
  while(stack.length) {
    // 获取当前第一个节点
    node = stack.shift();
    arr.push(node.id);
    // 如果该节点有子节点，继续添加进入栈顶
    if (node.children && node.children.length) {
      stack = node.children.concat(stack);
    }
  }
  return arr;
}



const tree = [
  {
    "id": 1,
    "title": "child1",
    "parentId": 0,
    "children": [
      {
        "id": 3,
        "title": "child1_1",
        "parentId": 1
      },
      {
        "id": 4,
        "title": "child1_2",
        "parentId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "child2",
    "parentId": 0,
    "children": [
      {
        "id": 5,
        "title": "child2_1",
        "parentId": 2
      }
    ]
  }
];

console.log(deepTree(tree));