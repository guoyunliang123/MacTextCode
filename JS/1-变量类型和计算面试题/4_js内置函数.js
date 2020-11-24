// typeof 可以得到哪些类型
// typeof 只能区分值类型，无法区分引用类型
const fn = function(){};
console.log(typeof fn); // function
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof 20); // number
console.log(typeof 'str'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined

// 何时使用 === ， 何时使用 ==
// 除此之外全都使用 ===
if(obj.a == null) {
  // 这里相当于 obj.a === null || obj.a === undefined, 简写形式
  // 这是 jQuery 源码中推荐的写法
}

// js 有哪些内置函数 -- 函数封装类对象
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error