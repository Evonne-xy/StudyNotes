# css命名规则
BEM命名规则

block__element--modifier

## 纵向滚动
```
overflow-y:auto
```

# relative 
![relative-Position-img](Img\relativePositionDes.png)

一般用于微调整位置,相对于自己的位置进行移动
老家会留坑，即使走了，老家也有他的位置

---

# absolute
![absolute-Position-img](Img\absolutePositionDes.png)
绝对定位： 以浏览器为坐标进行位置精准描述
绝对定位用来制作压盖，遮罩效果（z-index）

以浏览器为坐标轴向下移动100， 向右移动100
```
top: 100px; 
left: 100px;
```
脱离标准文档流，也就是不会再老家留坑。脱离文档流，margin属性不能用来水平居中

脱离标准文档流方法： float， absolute, 固定定位


## 绝对定位参考盒子
绝对定位的盒子会以自己祖先元素，离自己最近的拥有定位的盒子，当作基准点。这个盒子通常是relative的。“子绝父相”


## 盒子水平居中
```
margin: 0 auto;
```

## 盒子垂直居中

```
position: absolute;
top: 50%;
margin-top: -（自己高度减一半）
```

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

# flex布局 

左右布局 就是flex

以下英文图画，出自于：https://css-tricks.com/snippets/css/a-guide-to-flexbox/#top-of-site

![displayFlex-inline-diff-img](Img\displayFlex-inline-diff.png)

flex容器（flex-container)： 
采用flex布局的元素，称为flex container

什么是flex item
flex容器的所有子元素自动成为容器成员

![container_item_diff-img](Img\container_item_diff.png)

## Properties for Parent(Flex container)

## display
```
.container {
  display: flex; /* or inline-flex */
}
```

## flex-direction
![flex-direction-img](Img\flex-direction.png)
属性决定主轴的方向（项目排列的方向）
```html
.container{
    flex-direction: row | row-reverse | column | column reverse
}
```


## flex-wrap
默认情况下，项目都排在同一条线，flex-wrap。如果一条线拍不下，如何换行
```html
.container{
    flex-wrap: nowrap | wrap | wrap-reverse
}
```
![flex-wrap-img](Img\flex-wrap.png)

nowrap:不换行，他会压缩item的宽度
wrap: 换行，第一行在上方
wrap-reverse:换行，第一行在下方

---
## flex-flow
是flex-direction和flex-wrap的缩写形式，默认值为row nowrap

```HTML
.container{
    flex-flow: row nowrap
    <!-- 可以随意更改这两个词 -->
    flex-flow: row wrap
}
```
---
## justify-content
定义了对齐方式

```
.container{
    justify-content: flex-start | flex-end | center | space-between | space-around
}
```
flex-start: 左对齐
flex-end: 右对齐
center: 居中
space-between: 两端对齐
space-around: 两端对齐，项目之间间隔相等

![justify-content-img](Img\justify-content.png)

---
## align-item
定义项目在交叉轴如何对齐
相比较，justify content 可以把他看作垂直于主轴的调整

```html
.container{
    align-items:flex-start | flex-end | center | stretch
}
```

flex-start: items被放在在交叉轴的起点
flex-end: items被放在在交叉轴的终点
center：items被放在在交叉轴的中心
baseline: item按照baseline对齐
stretch： 拉伸以填充容器(仍然遵循最小宽度/最大宽度)

![align-items-img](Img\align-items.png)

## align-content
定义了多根轴线在交叉轴的对齐方式

注意：这个属性可以影响多行的（flex-wrap: wrap | wrap-reverse).然而单行的（flex-wrap: default, nowrap）是不起作用的

```
.container{
    flex-wrap: wrap;
    align-content: flex-start | flex-end | center | space-between | space-around | fetch
}
```
flex-start: 整体从顶部开始布局
flex-end: 整体从底部开始布局
center: 与交叉轴中点对齐
space-between: 与交叉轴的两端对齐，中间间距相等 
space-around: item平均分布，每一行周围都有相等空间
stretch: 拉伸占满

![align-content-img](Img\align-content.png)


## Properties for the Children(flex items)

## order
定义item排列顺序，数值越小，排列越靠前

```
.item{
    order:<integer>; /* default is 0 */
}
```
![order-img](Img\order.png)

## flex-grow
定义项目的放大比例，默认为0；如果存在剩余空间，也不放大

```
.item{ 
    flex-grow:<number> /*default is 0 */
}
```
如果flex-grow属性为1，则这些item会平分剩余空间
如果flex-grow属性为2，其他项目为1，则前者占据剩余空间比其他项目多一倍
![flex-grow-img](Img\flex-grow.png)

如果有item中有 flex-width， 有的项目有width属性， 有flex-content会等分剩余空间

## flex-shrink
定义了item缩小比例，默认为1， 如果空间不够，项目将缩小

是1就会缩小，是0就不会缩小

```
.item{
    flex-shrink:3 /* default 1 */
}
```

## flex-basis
在分配多余空间之前，item占据主轴空间

```HTML
.item{
    width: 200px
    <!-- 他的优先级比width高，item宽度会被设置为400 -->
    flex-basis: 400px | auto
}
```

## flex
flex属性是flex-grow, flex-shrink,flex-basis的简写，默认值为0 1 auto

```
.item{
    flex:none | <'flex-grow'> <'flex-shrink'> || <'flex-basis'>
}
```

## align-self
允许单个项目和其他项目有不同的对齐方式，可覆盖align-items属性。
![flex-grow-img](Img\align-self.png)

```
.item{
    align-self: auto | flex-start | flex-end | center | baseline | stretch
}
```
---
# 媒体查询

不同大小屏幕上 都有相应的样式
1024 < screen > 900
```
@media screen and (min-width: 900px)  and (max-width:1024px){
    body{
        ...
    }
}
```

> 1024 或者 <900
```
@media screen and (min-width: 1024px), (max-width:900px)
```

## 屏幕宽度

xs < 576px
sm: 576px ~ 768 px
md: 768px ~ 992px
lg: 992px ~ 1200px
xl: > 1200px

```
@media(max-width: 576px){

}
@media(max-width: 577px) and (max-with: 768px){

}
@media(max-width: 769px) and (max-with: 992px){

}

```

Pc first

```
.col{
    width: 8.3333%
}
@media(max-width: 1200px){
 <!-- 当屏幕为1000px时候，执行完第一行，会执行这个，并且将第一行代码覆盖 -->
}
@media(max-width: 992px){

}
```
--- 
#移动端常用单位

## em

当父元素大小改变时，子元素大小也会改变

The font-size of the .child element will be 40px (2*20px).

The margin of .child will be 60px. That’s 1.5 times the font-size of our element (1.5*40px).
```html
<style>
    .parent {
        font-size: 20px;
    }
  
    .child-em {
        font-size: 2em;
        margin: 1.5em;
    }
</style>
```

## rem
与em不一样的是，rem 全部的长度相对于根元素，根元素是谁？ HTML元素，通常做法是给html元素设置一个字体大小

```html
<style>
    .html {
        font-size: 30px;
    }
  
    .parent {
        font-size: 20px;
    }
  
    .child-rem {
        font-size: 2rem; /* 30*2 = 60px */
        margin: 1.5rem;
        /* 30*1.5 = 45px */
    }
</style>
```

```html
<script>
    setRemUnit();
    window.onresize =  setRemUnit;
    function setRemUnit(){
        var docEI = document.documentElement;
        // 获取viewPort 宽
        var viewWidth = docEl.clientWidth;
        docEI.style.fontSize = viewWidth / 375 * 20 + 'px'
    }
</script>
```
 ---
 # 栅格系统

```
col-
    col-1 一行显示多少分之一
    ...
    col-12 一行这个元素要占12/12,也就是只有一个元素


col-sm- 
    col-sm-1
col-md-
col-lg-
col-xl-
```

元素向右推4个格子
```html
<div class = "col-md-offset-4 ">

```

元素向右推4个格子
```html
<div class = "col-md-push-4 ">
```

元素向左推4个格子
```html
<div class = "col-md-pull-4 ">
```
隐藏
```html
<div class = "col-md-4 d-none d-md-block ">
```
d-none 超小屏以下不显示 
d-md-block 中小屏显示












