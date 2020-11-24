// 闭包
function F1() {
  var a =  100;

  // 返回一个函数（函数作为返回值）
  return function() {
    console.log(a); // a 是自由变量，去父级作用域中找
  }
}
// f1 得到一个函数
var f1 = F1();
var a = 200;
f1();

// 使用场景
// 1、函数作为返回值（上面的 demo）
// 2、函数作为参数传递

// 函数作为参数传递
function F1() {
  var a =  100;

  // 返回一个函数（函数作为返回值）
  return function() {
    console.log(a); // a 是自由变量，去父级作用域中找
  }
}
var f1 = F1();
function F2(fn) {
  var a = 200;
  fn();
}
F2(f1);