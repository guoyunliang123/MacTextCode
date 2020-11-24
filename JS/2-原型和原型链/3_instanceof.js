// instanceof
// 用于判断引用类型属于哪个构造函数的方法

// f instanceof Foo 的判断逻辑是：
// f 的 __proto__ 一层一层往上，能否对应到 Foo.prototype
// 在试着判断 f instanceof Object