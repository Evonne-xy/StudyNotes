CSS 知识模块

1. 布局
2. 定位
3. 图文样式
4. 响应式
5. CSS3

# 如何理解HTML语义化

```html
<div>标题</div>
<div>
    <div>一段文字</div>
    <div>
        <div>列表1</div>
        <div>列表2</div>
    </div>
</div>
```
```html
<div>标题</div>
<div>
    <p>一段文字</p>
    <ul>
        <li>列表1</li>
        <li>列表2</li>
    </ul>
</div>
```

优点：1.让人读懂代码 2.让搜索引擎更容易读懂

# 哪些是HTML标签是块级元素，哪些是内联元素。

1. display: block/table
特点：这些元素独占一行
eg: div h1 h2 table ul ol p 

2. display:inline/inline-block 
eg:span img input button a

    
