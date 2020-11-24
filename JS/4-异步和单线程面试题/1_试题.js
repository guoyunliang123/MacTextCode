// 一、同步和异步的区别是什么？分别举一个同步和异步的例子
// 1、区别：同步会阻塞代码执行（例如 alert），而异步不会
// 2、例子：alert 同步，setTimeout 是异步

// 二、一个关于 setTimeout 的笔试题
console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);
setTimeout(function() {
  console.log(4);
}, 1000);
console.log(5);
// 1,3,5,2,4

// 三、前端使用异步的场景有哪些