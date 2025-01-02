/**
 * new 操作符会将新对象的 __proto__ 链接到构造函数的 prototype，以实现继承。
 * 1、首先创建一个新的空对象, 并将其原型，链接到构造函数的prototype
 * 2、执行构造函数，将this绑定到新对象上
 * 3、返回对象
 */

function myNew (Construct, ...args){
  let obj = Object.create(Construct.prototype);

  let result = Construct.apply(obj, args);

  // 如果构造函数显式返回了一个对象，则返回该对象；否则返回新创建的对象
  return  result instanceof Object ? result : obj;
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = customNew(Person, 'Alice', 25);
console.log(person.name); // 'Alice'
console.log(person.age);  // 25
console.log(person instanceof Person); // true
