document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // 计算用户实际在页面停留时间
    
    console.log('页面活跃状态。')
  } else {
    // 停止页面允许的动画
    // 暂停适配播放

    console.log('页面不是活跃状态。')
  }
})