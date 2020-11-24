// 1
function addToList(item, list) {
  return list.push(item)
};
const result = addToList('apple', ['banana']);
console.log(result);

// 2
const spookyItems = ['aa', 'bb', 'cc'];
({item: spookyItems[3]} = {item: 'dd'});
console.log(spookyItems);

// 3
const shape = {
  redius: 10,
  diameter() {
    return redius * 2;
  },
  perimeter: () => 2 * Math.PI * this.redius
};
shape.diameter(); // 
shape.perimeter(); // 

// 4
const name = "Lydia Hallie";
console.log(name.padStart(13));
console.log(name.padStart(2));

// 5
// 解析：使用或运算符，会返回第一个真值，如果所有值都是假值，则返回最后一个值
const one = (false || {} || null);
const two = (null || false || '');
const three = ([] || 0 || true);
console.log(one, two, three);

// 6
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';

// 7
const sum = eval('10 * 10 + 5'); // 结果类型为 number

// 8
// 扩展运算符返回一个带参数的数组，typeof array 是 object
function getAge(...args) {
  console.log(typeof args);
}
getAge(21); // 'object'