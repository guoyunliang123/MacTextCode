// 1、获取 2020-10-30 格式的日期
Date.now(); // 获取当前时间毫秒数
var dt = new Date();
dt.getTime(); // 获取毫秒数
dt.getFullYear(); // 年
dt.getMonth(); // 月（0 - 11）
dt.getDate(); // 日（0 - 31）
dt.getHours(); // 小时（0 -23）
dt.getMinutes(); // 分钟（0 - 59）
dt.getSeconds(); // 秒（0 - 59）
// 2、获取随机数，要求长度一致的字符串的格式
// 3、写一个可以遍历对象和数组的通用 forEach 函数

// 1、获取 2020-10-30 格式的日期
function formatDate(dt) {
  if(!dt) {
    dt = new Date();
  };
  var year = dt.getFullYear();
  var month = dt.getMonth() + 1;
  var date = dt.getDate();
  if(month < 10) {
    // 强制类型转换
    month = '0' + month;
  }
  if(date < 10) {
    date = '0' + date;
  }
  return year + '-' + month + '-' + date;
}
var dt = new Date();
var formatDate = formatDate(dt);
console.log(formaDate);

// 2、获取随机数，要求长度一致的字符串的格式
var random = Math.random();
random = random + '0000000000';
random = random.slice(0, 10);
console.log(random);

// 3、写一个可以遍历对象和数组的通用 forEach 函数
function forEach(obj, fn) {
  var key;
  if(obj instanceof Array) {
    // 准确判断是不是数组
    obj.forEach(function(item, index) {
      fn(index, item);
    })
  } else {
    // 不是数组就是对象
    for(key in obj) {
      fn(key, obj[key])
    }
  }
}

var arr = [1, 2, 3];
// 注意，这里参数的顺序换了，为了和对象的遍历格式一致
forEach(arr, function(index, item) {
  console.log(index, item);
})

var obj = {x: 100, y: 200};
forEach(obj, function(key, value) {
  console.log(key, value);
})