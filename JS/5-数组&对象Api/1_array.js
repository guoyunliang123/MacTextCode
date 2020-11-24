// 一、forEach
var arr = [1, 2, 3];
arr.forEach(function(item, index) {
  // 遍历数组的所有元素
  console.log(item, index);
})

// every
var arr = [1, 2, 3];
var result = arr.every(function(item, index) {
  // 用来判断数组中所有的元素，是否都满足一个条件
  if(item < 4) {
    return true
  }
})
console.log(result);

// some
var arr = [1, 2, 3];
var result = arr.some(function(item, index) {
  // 只需要有一个满足条件即可
  if(item < 2) {
    return true
  }
})
console.log(result);

// sort
var arr = [9, 2, 4, 7, 6];
var arr2 = arr.sort(function(a, b) {
  // 从小到大排序
  return a - b;

  // 从大到小排序
  // return b - a;
})
console.log(arr2);

// map
var arr = [1, 2, 3, 4];
var arr2 = arr.map(function(item, index) {
  return '<b>' + item + '</b>'
})
console.log(arr2);

// filter
var arr = [1, 2, 3];
var arr2 = arr.filter(function(item, index) {
  // 通过一个条件过滤数组
  if(item >= 2) {
    return true
  }
})
console.log(arr2);