/**
 * 题目：以横向的维度对树进行遍历，从第一个节点开始，依次遍历其所有的兄弟节点，再遍历第一个节点的子节点，一层层向下遍历
 * 输入：
 * 输出：[1, 2, 3, 4, 5]
 */

function rangeTree(tree) {
  if (!tree || !tree.length) return;
  let arr = [];
  let node, list = [...tree];

  while((node = list.shift())) {
    arr.push(node.id);
    node.children && list.push(...node.children);
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

console.log(rangeTree(tree));