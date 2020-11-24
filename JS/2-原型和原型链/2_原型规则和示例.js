// 1、所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了 ‘null’ 以外）
// 2、所有的引用类型（数组、对象、函数），都有一个 __proto__ 属性，属性值是一个普通的对象
// 3、所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象
// 4、所有的引用类型（数组、对象、函数），__proto__ 属性指向它的构造函数的 'prototype' 属性值
// 5、当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的 __proto__（即它的构造函数的 prototype ）中寻找
// 例：
// 1、
// var obj = {}; obj.a = 100;
// var arr = []; arr.a = 100;
// function fn() {}; fn.a = 100

// 2、
// console.log(obj.__proto__);
// console.log(arr.__proto__);
// console.log(fn.__proto__);

// 3、
// console.log(fn.prototype);

// 4、
// console.log(obj.__proto__ === Object.prototype); // true

// 5、
// 构造函数
function Foo(name, age) {
  this.name = name;
}
Foo.prototype.alertName = function() {
  alert(this.name);
}

// 创建示例
var f = new Foo('zhangsan');
f.printName = function() {
  console.log(this.name);
}
// 测试
f.printName();
f.alertName(); // f 没有 alertName 属性，就去它的构造函数的 prototype 上去寻找，f 的构造函数是 Foo()
f.toString(); // 要去 f.__proto__.__proto__ 中查找

// 只获取自己本身的属性 例如：只获取 f 的 name 和 printName 属性
// alertName 是 f 的构造函数的属性
var item;
for(item in f) {
  // 高级浏览器已经在 for in 中屏蔽了来自原型的属性
  // 但是这里建议大家还是加上这个判断，保证程序的健壮性
  if(f.hasOwnProperty(item)) {
    console.log(item);
  }
}