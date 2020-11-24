// js 按照存储方式区分为哪些类型，并描述其特点

// 值类型
var a = 10;
var b = a;
a = 11;
console.log(b); // 10

//引用类型
var obj1 = {x: 100};
var obj2 = obj1;
obj1.x == 200;
console.log(obj2.x); // 200