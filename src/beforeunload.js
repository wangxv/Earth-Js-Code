window.addEventListener('unload', (e) => {
  console.log('unload==========:', e);
  // 发送统计信息
});

window.addEventListener('beforeunload', (e) => {
  e.returnValue = '确定要离开吗？'; // 已废弃
});

setTimeout(() => {
  window.history.back();
}, 3000)