const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

if (connection) {
  console.log('网络类型：', connection.effectiveType);
  console.log('下行速度：', connection.downlink, 'Mbps');
  console.log('RTT：', connection.rtt, 'ms');
  console.log('connection：', connection);

  connection.addEventListener('change', (e) => {
    console.log('变化：', e);
    console.log('网络类型变化：', connection.effectiveType);
  });
}