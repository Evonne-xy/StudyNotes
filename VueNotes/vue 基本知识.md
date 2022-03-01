## vue的一些基本知识点

1. v-for v-if
2. event
3. 事件修饰符**



# v-for和v-if不能一起使用

1. v-for既可以遍历数组，也可以遍历对象

数组举例： v-for="(item,idex) in listArr" :key="item.id"

对象举例： v-for="(val,key,index) in listObj" :key="key"

就是将item拆成了key index


2. v-for和v-if不能在一块用(不建议一起用)
原因： 
  a.v-for比v-if优先级高
  b.写一起v-for循环了多少次，v-if就判断了多少次

如果需要使用 将if放到外面

##  加一点event知识

1. vue里的 event是原生的
2. 事件被挂载到当前元素 

这个event就会被挂载到button这个元素
```js
<button @click = "increment(1,$event)"></button>
```

## 事件修饰符
```js
//阻止单击事件传播
<a @click.stop = "doThis"></a>

//提交事件不再重载页面
<form @submit.prevent = "onSubmit"></form>

//修饰符可以串联
<a @click.stop.prevent = "doThat"></a>

//添加event监视器捕获模式，内部元素触发事件先在此处理，然后再交给内部元素处理

<div @click.capture = "doThis"></div>

//只有再event,target是当前元素时触发函数
<div @click.self = "doThat"></div>
```

## 按键修饰符

```js
//Alt或Shift被统一按下，才会触发
<button @click.ctrl = "onClick">A</button>

//只有CTRL按下才触发
<button @click.ctrl.exact = "onCtrlCLick"></button>

//没有任何系统修饰符按下才触发
<button @click.exact = "onClick"></button>
```

## 表单 v-model
常见表单项： textarea checkbox radio select

修饰符： lazy, number, trim 

lazy:防抖，输完后在变化
trim: 截取空格
number:转化数字
