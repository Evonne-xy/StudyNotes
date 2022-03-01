# localStorage,localSession 

- 最大存5M

- API 简单易用，可以用localStorage.getItem / setItem 
  
- 不会随着HTTP请求发送出去


## localStorage,localSession 区别
local storage 会永久存储，除非手动代码删除

session storage 只存在于当前会话，浏览器关闭就清空

一般用localStorage会更多一些


## cookie缺点

- 存储大小4k
- HTTP请求要发送server，增加数据请求量
- 只能用document.cookie = ... 来修改

