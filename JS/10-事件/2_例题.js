// 1、编写一个通用的事件绑定函数
function bindEvent(elem, type, selector, fn) {
  if(fn == null) {
    fn = selector;
    selector = null;
  };
  elem.addEventListener(type, function(e) {
    var target;
    if(selector) {
      target = e.target;
      if(target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn(e)
    }
  })
}