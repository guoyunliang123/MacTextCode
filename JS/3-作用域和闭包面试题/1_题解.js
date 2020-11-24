// 一、变量提升
// 1、变量定义
// 2、函数声明（注意和函数表达式的区别）

// 二、this 几种不同的使用场景
// 1、作为构造函数执行
// 2、作为对象属性执行
// 3、作为普通函数执行
// 4、call  apply  bind

// 三、创建 10 个 a 标签，点击的时候弹出对应的序号
// 错误写法 改正：将 var 改成 let
var i, a;
for(i=0; i<10; i++) {
  a = document.createElement('a');
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function(e) {
    e.preventDefault();
    alert(i); // 每次都会弹出 10
  });
  document.body.appendChild(a);
}
// 正确写法
var i;
for(i=0; i<10; i++) {
  (function(i) {
    var a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('cilck', function() {
      e.preventDefault();
      alert(i);
    });
    document.body.appendChild(a);
  })(i)
}

// 四、如何理解作用域
// 1、自由变量
// 2、作用域链，即自由变量的查找
// 3、闭包的两个场景

// 实际开发中闭包的应用  封装变量，收敛权限
// 在 isFirstLoad 函数外，无法修改 _list 的值
function isFirstLoad() {
  var _list = [];
  return function(id) {
    if(_list.indexOf(id) >= 0) {
      return false
    } else {
      _list.push(id);
      return true;
    }
  }
}

// 使用
var firstLoad = isFirstLoad();
firstLoad(10); // true
firstLoad(10); // false
firstLoad(20); // true