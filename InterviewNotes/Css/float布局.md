## Float布局考点
1. 如何实现圣杯布局和双飞翼布局
2. 手写clearfix

### 圣杯布局和双飞翼布局的目的

1. 三栏布局，中间一栏最先加载和渲染（内容最重要）
2. 两侧内容固定，中间内容随着宽度自适应
3. 一般用于PC网页

### 圣杯布局

1. 使用float布局 （每一项都需要float:left, footer使用clear:both清除浮动）
2. 两侧使用margin负值，以便和中间内容横向重叠 （左侧使用margin-left:-100%， margin-right:-本身的宽度
3. 防止中间内容被两侧覆盖，用padding （padding-left:左边的宽度， padding-right:右边的宽度）

```html
<style>
        header{
            text-align: center;
            background-color: #f1f1f1;
        }
        #center{
            background-color: #ccc;
            width:100%
        }
        #container{
            padding-left:200px;
            padding-right:150px
        }
        #container .column{
            float:left
        }
        #left{
            position:relative;
            width:200px;
            background-color: yellow;
            right:200px;
            margin-left:-100% /*针对当前元素 即当前元素的全部宽度 */
        }
        #right{

            width:150px;
            background-color: red;
            margin-right: -150px; /*按道理说应该是右边的元素左移，当左移到他本身的宽度时候，就相当于他没有宽度了，所以就上去了 */
        }
        #footer{
            clear:both;
            text-align:center;
            background-color:#f1f1f1
        }
    </style>
</head>
<body>
    <header>This is header</header>
    <div id = "container">
        <div id = "center" class = "column">This is center</div>
        <div id = "left" class = "column">This is right</div>
        <div id = "right" class = "column">This is left</div>
    </div>
    <div id = "footer">This is footer</div>
</body>
```

### 双飞翼布局
1. 使用float布局 （每一项都需要float:left, footer使用clear:both清除浮动）
2. 两侧使用margin负值，以便和中间内容横向重叠 （左侧使用margin-left:-100%， margin-left:-本身的宽度)
3. 防止中间内容被两侧覆盖，用margin （margin:0 190px 0 190px）

```html
    <style type="text/css">
        body {
            min-width: 550px;
        }
        #main {
            width: 100%;
            background-color: #ccc;
        }

        .main-wrapper{
            margin:0 190px 0 190px
        }

        .col{
            float:left
        }

        #left {
            width: 190px;
            background-color: #0000FF;
            margin-left:-100%
        }
        #right {
            width: 190px;
            background-color: #FF0000;
            margin-left:-190px
        }
    </style>
</head>
<body>
    <div id="main" class = "col">
        <div class = "main-wrapper">
            this is main   
        </div>
    </div>

    <div id="left" class="col">
        this is left
    </div>
    <div id="right" class="col">
        this is right
    </div>
</body>
```

双飞翼使用margin给左右留白，圣杯布局使用padding给左右留白,其实都用padding也可以
双飞更简洁易懂，圣杯相对复杂些



### 手写clearfix

什么是浮动？ 容器的高度不能自动伸长适应内容的高度，使得内容溢出到容器外面

😈方法一：

```html
.clearfix:after{
    content:'';
    display:block;
    clear:both
}
```
😈方法二：

也可以使用overflow:hidden 
主要缺点：如果在父级元素设置高度，任何溢出都会被隐藏。比如创建导航的子菜单，不会出现


方法


```html
<body>
    <header>This is header</header>
    <div id = "container" class="clearfix">
        <div id = "center" class = "column">This is center</div>
        <div id = "left" class = "column">This is right</div>
        <div id = "right" class = "column">This is left</div>
    </div>
    <div id = "footer">This is footer</div>
</body>
```


