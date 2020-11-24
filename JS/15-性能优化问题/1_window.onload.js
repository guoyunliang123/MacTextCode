// window.onload 和 DomContentLoaded 的区别
// window.onload 页面全部资源加载完才会执行，包括视频，图片

// DomContentLoaded  DOM 渲染完即可执行，此时图片和视频有可能没加载完


// 减少 DOM 操作：缓存查询，合并 DOM 插入
// 1、缓存查询
var i;
for(i = 0; i < document.getElementsByTagName('p').length; i++) {
  // todo
}
// 缓存了 DOM 查询
var pList = document.getElementsByTagName('p');
var i;
for( i = 0; i < pList.length; i++) {
  // todo
}

// 2、合并 DOM 插入
var listNode = document.getElementById('list');

// 要插入 10 个 li 标签
var frag = document.createDocumentFragment();
var x, li;
for(x = 0; x < 10; x++) {
  li = document.createElement('li');
  li.innerHTML = 'List item ' + x;
  frag.appendChild(li);
};
listNode.appendChild(frag);

// 3、事件节流
var textarea = document.getElementById('text');
var timeoutId;
textarea.addEventListener('keyup', function() {
  if(temeoutId) {
    clearTimeout(timeoutId)
  };
  timeoutId = setTimeout(function(){
    // 触发 change 事件
  }, 1000)
})