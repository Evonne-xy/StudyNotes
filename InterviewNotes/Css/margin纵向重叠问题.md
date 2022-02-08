```html
<style>
p{
    font-size:16px;
    line-height:1;
    margin-top:10px;
    margin-bottom:15px
}

</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```

如下代码， AAA和BBB之间的距离是多少 答案：15px

1. 相邻元素的margin-top和margin-bottom会发生重叠
2. 空白内容的<p></p>也会重叠
