/**
 * 节流：连续触发事件，在n秒内只执行一次
 * @param {*} func 需要节流的函数
 * @param {*} limit 限制时间
 */
function throttle(func, limit) {
  let inThrottle = false;

  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        return inThrottle = false;
      }, limit);
    }
  }
}

const resizeChange = throttle(function(event) {
  console.log(event);
}, 250);

window.addEventListener('resize', resizeChange);