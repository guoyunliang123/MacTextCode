function Foo(name, age) {
  this.name = name;
  this.age = age;
  this.class = 'class-1';
  // return this // 默认有这一行
}
var f = new Foo('zhangsan', 20);
// var f1 = new Foo('lisi', 22); // 创建多个对象

// 构造函数扩展
// var a = {} 其实是 var a = new Object() 的语法糖
// var a = [] 其实是 var a = new Array 的语法糖
// function Foo() {...} 其实是 var Foo = new Function(...)
// 使用 instanceof 判断一个函数是否是一个变量的构造函数