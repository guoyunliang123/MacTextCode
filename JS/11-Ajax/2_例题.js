// 手动编写一个 ajax，不依赖第三方库
var xhr = new XMLHttpRequest();
xhr.open("GET", "/api", false);
xhr.onreadystatechange = function() {
  // 这里的函数是异步执行，可参考之前 js 基础中的异步模块
  if(xhr.readyState == 4) {
    if(xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}
xhr.send(null);

// 跨域的几种实现方式