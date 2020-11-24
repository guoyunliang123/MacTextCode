// 一、navigator
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(isChrome);

// 二、screen
console.log(screen.width);
console.log(screen.height);

// 三、location
console.log(localtion.href); // 整段 url
console.log(localtion.host); // 域名
console.log(localtion.protocal); // 协议： http || https
console.log(localtion.pathname); // 
console.log(localtion.search); // 问号之后的参数
console.log(localtion.hash); // # 后

// 四、history
history.back();
history.forward();