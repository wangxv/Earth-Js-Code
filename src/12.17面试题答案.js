// 数组转树
function arrToTree(arr) {
  let result = [];

  let map = new Map();

  arr.forEach((item) => {
    map.set(item.id, {...item, children: []});
  });

  arr.forEach((item) => {
    let node = map.get(item.id);

    if (!item.parentId && item.parentId !== 0) {
      result.push(node);
    } else {
      let parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  });

  return result;
}

let arr = [
  {
    id: 0, text: 'name', parentId: null,
  },
  {
    id: 1, text: 'sex', parentId: null,
  },
  {
    id: 4, text: '张三', parentId: 0,
  },
  {
    id: 7, text: '李四', parentId: 4
  }
];

console.log(arrToTree(arr));


// 柯里化

function curried(fun) {
  return function curry(...args) {
    if (args.length >= fun.length) {
      fun(...args);
    } else {
      return function (nextArgs) {
        return curry(...args, ...nextArgs);
      }
    }
  }
}