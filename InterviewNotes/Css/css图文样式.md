## line-height继承问题

以下三种情况，p标签的行高是多少？

```html
 <style>
        body {
            font-size: 20px;
            /* 
            1. line-height: 20px;
            2. line-height: 2;
            3. line-height: 200%; */
        }
        p {
            background-color: #ccc;
            font-size: 16px;
        }
</style>

<body>
    <p>这是一行文字</p>
</body>
```
1. 写具体数值: 行高20px (继承该值)
2. 写比例: 16px * 2 = 32px (继承该比例)
3. 写百分比：20px * 200% = 40px (继承计算出来的值)


