// 什么是异步
// 异步会阻塞程序的运行
console.log(100);
setTimeout(function() {
  console.log(200);
}, 1000);
console.log(300);

// 对比同步
console.log(100);
alert(200);
console.log(300);

// 何时需要异步
// 1、在可能发生等待的情况
// 2、等待过程中不能像 alert 一样阻塞程序运行
// 3、因此，所有的 “等待的情况” 都需要异步

// 前端使用异步的场景
// 1、定时任务：setTimeout setInverval
// 2、网络请求：ajax 请求，动态 <img> 加载
// 3、事件绑定

// 异步和单线程
console.log(100);
setTimeout(function() {
  console.log(200);
});
console.log(300);

// 执行第一行打印 100
// 执行 setTimeout 后，传入 setTimeout 的函数会被暂存起来，不会立即执行，（单线程特点，不可以同时干多件事）
// 执行最后一行打印 300
// 带所有程序执行完，处于空闲状态时，会立即看有没有暂存起来需执行的
// 发现暂存起来的 setTimeout 中的函数，无需等待时间，立即执行