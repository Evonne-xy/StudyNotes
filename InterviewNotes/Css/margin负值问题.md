margin负值问题

1. margin-top和margin-left负值，元素向上向左移动 
2. margin-right负值，右侧元素左移，自身不受影响
3. margin-bottom 负值，下方元素上移 自身不受影响

![margin_负值](../Images/margin负值.png)


```html
<style>
       body{
           margin: 20px;
       }
       .float-left{
           float: left;
       }
       .clearfix:after{
           content:'';
           display: table;
           clear: both;
       }
       .container{
           border: 1px solid #ccc;
           padding: 10px;
       }
       .container .item{
           width: 100px;
           height: 100px;
       }
       .container .border-blue{
           border: 1px solid blue;
       }
       .container .border-red{
           border: 1px solid red;
       }
</style>
     
      <p>用于测试margin top bottom 的负数情况</p>
    <div class="container">
        <div class="item border-blue">this is item 1</div>
        <div class="item border-red">this is item 2</div>
    </div>

    <p>用于测试margin left right 的负数情况</p>
    <div class="container clearfix">
        <div class="item border-blue float-left">this is item 3</div>
        <div class="item border-red float-left">this is item 4</div>
    </div>
```
