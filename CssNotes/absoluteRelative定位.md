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

