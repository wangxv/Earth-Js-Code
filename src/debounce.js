/**
 * 防抖：事件触发后，n秒内只能执行一次，如果n秒内再次触发，则重新计时
 */

function debounce(func, wait) {
  let timer = null;

  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const resizeChange = debounce(function(event) {
  console.log(event);
}, 250);

window.addEventListener('resize', resizeChange);