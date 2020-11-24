// 一、通用事件绑定
var btn = document.getElementById('btn');
btn.addEventListener('click', function(event) {
  console.log(clicked);
})

function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn);
};
var a = document.getElementById('link1');
bindEvent(a, 'click', function(e) {
  e.preventDefault();
  alert('clicked')
})

// IE 中使用 attachEvent 绑定事件

// 二、事件冒泡
// 三、代理