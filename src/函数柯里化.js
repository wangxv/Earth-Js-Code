
/**
 * 柯里化的应用场景
 * 柯里化是一种函数式编程技巧，能让代码更具可读性、可维护性和复用性。在日常开发中，尤其是对参数复用、延迟执行需求较高的场景，柯里化是一种非常有用的工具。
 * 通过理解柯里化的原理和实现，你可以在实际项目中更灵活地使用它，从而简化逻辑、提升代码质量！
 * 1、参数复用
 * 2、函数组合
 */
function curry(fn) {
  return function curried(...args) {
    // 如果参数个数满足原函数的参数数量，调用原函数
    if (args.length >= fn.length) {
      return fn(...args);
    }

    // 否则返回一个新的函数，继续接收参数
    return function(...nextArgs) {
      return curried(...args, ...nextArgs);
    }
  }
}

// 示例
function add(a, b, c) {
  return a + b + c;
}
let curryAdd = curry(add);
console.log(curryAdd(1)(2)(3));
console.log(curryAdd(1, 2)(3));