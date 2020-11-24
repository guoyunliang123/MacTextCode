// this
// this 在执行时才可以确认值，定义是无法确认

// 1、作为构造函数执行
var Foo = function(name) {
  this.name = name;
}
var f = new Foo('zhangsan');
// 2、作为对象属性执行
var obj = {
  name: 'A',
  printName: function() {
    console.log(this.name);
  }
}
obj.printName();
// 3、作为普通函数执行
function fn() {
  console.log(this);
}
fn();
// 4、call apply bind
// call
function fn1(name, age) {
  alert(name)
  console.log(this); // {x: 100}
}
fn1.call({x: 100}, 'zhangsan', 20); // this 指向 call() 的第一个参数 ： {x: 100}

function fn2(name) {
  alert(name)
  console.log(this); // {x: 100}
}
fn2.apply({x: 100}, ['zhangsan', 20]); // 与 call 的传参形式不同

// bind
var fn3 = function(name, age) {
  alert(name);
  console.log(this); // {y: 200}
}.bind({y: 200})
fn3('zhangsan', 20);

var a = {
  name: 'A',
  fn: function() {
    console.log(this.name);
  }
}
a.fn(); // this === a
a.fn.call({name: 'B'}); // this === {name: 'B'}
var fn1 = a.fn;
fn1(); // this === window