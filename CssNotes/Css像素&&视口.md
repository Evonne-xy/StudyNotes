# css像素 物理像素

标清屏：1css =  1 物理像素
高清屏：1css =  4 物理像素

点越多描述的越精细

![magnify-img](Img\magnify.png)
放大前，手机屏幕是1css像素 = 1 物理像素，
放大后会 1 css像素 = 2* 2物理像素

![shrink-img](Img\shrink.png)
缩小前 手机屏幕是1css像素 = 1 物理像素，
缩小后， 2*2 css像素 = 1 物理像素

```html
<meta name = "viewport" content = "initial-scale = 1">
<!-- 放大 -->
<meta name = "viewport" content = "initial-scale = 2">
<!-- 缩小 -->
<meta name = "viewport" content = "initial-scale = 0.5 ">
```
---

# viewPort
一般的浏览器宽度是980，当你缩小成手机，他的宽度依然是980，使用viewport可以改变这一点

content width 是会根据宽度，改变
初始缩放比 1， 不允许用户缩放，

```html
<meta name = "viewport" content = "width = device-width,initial-scale = 1,user-scalable = no, maximum-scale = 1, minimum-scale = 1">
```

### 获取当前window 窗口大小

```js
var viewWidth = document.documentElement.clientWidth || window.innerWidth 
```