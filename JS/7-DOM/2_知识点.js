// 1、DOM 本质


// 2、获取 DOM 节点
var div1 = document.getElementById('div1'); // 元素
var divList = getElementByTagName('div'); // 集合
console.log(divList.length);
console.log(divList[0]);

var containerList = document.getElementsByClassName('.container'); // 集合
var pList = document.querySelectorAll('p') // 集合

// property
var pList = document.querySelectorAll('p');
var p = pList[0];
console.log(p.style.width); // 获取样式
p.style.width = '100px'; // 修改样式
console.log(p.className); // 获取 class
p.className = 'p1'; // 修改 class

// 获取 nodeNome 和 nodeType
console.log(p.nodeName);
console.log(p.nodeType);

// Attribute
var pList = document.querySelectorAll('p');
var p = pList[0];
p.getAttribute('data-name');
p.setAttribute('data-name', 'imooc');
p.getAttribute('style');
p.setAttribute('style', 'font-size: 30px');
