// 回顾 js 基础
// 1、特点：表面看起来并不能用于工作中代码开发
// 2、内置函数：Object Boolean Array String ...
// 3、内置对向 Math Json

// JS-Web-API
// js 基础知识：ECMA-262
// JS-Web-API：W3C 标准

// W3C 标准中关于 JS 的规定有：
// DOM 操作
// BOM 操作
// 事件绑定
// ajax 请求
// 存储

// JS-Web-API
// 页面弹框是 window.alert(123), 浏览器需要做：
// 定义一个 window 全局变量，对象类型
// 给他一个 alert 属性，属性值是一个函数

// 获取元素 document.getElementById(id), 浏览器需要做：
// 定义一个 document 全局变量，对象类型
// 给他定义一个 getElementById 的属性，属性值也是一个函数

// 但是 W3C 标准没有规定任何 js 基础相关的东西
// 不管什么变量类型、原型、作用域和异步
// 只管定义用于浏览器中 js 操作页面的 API 和全局变量