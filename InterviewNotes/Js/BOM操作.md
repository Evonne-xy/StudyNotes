# BOM(Browser Object Model) 操作


## 题目1：如何识别浏览器类型

navigator(浏览器信息)
```js
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
```


screen (屏幕信息，高度等)
```js
screen.length 
screen.width
```


## 题目2：如何分析拆解URL各个部分
location(地址信息)

```js
location.href //网址
location.https //使用的protocol
location.host //域名
location.search //获取url的query参数
location.hash // 去url的hash值，比如'#list'
location.pathName //路径
```

history:

```js
history.back
history.forward
```



## 题目2：如何识别浏览器类型