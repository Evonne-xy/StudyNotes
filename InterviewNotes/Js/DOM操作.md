# Js Web API

- DOM: 操作网页上的DOM元素，比如文本，图片等
- BOM：操作浏览器， 导航，跳转 宽高
- 事件绑定：绑定时间，监听点击
- Ajax：发生网络请求
- 存储：浏览器暂存数据


## DOM的本质

DOM本质是从HTML文件中解析出来的一棵树

## 获取dom 节点

```js
const div1 = document.getElementById('div1');

//集合
const divList = document.getElementsByTagName('div')
console.log(divList.length)

const containerList = document.getElementsByClassName('container')

const pList = document.querySelectorAll('p')
```

## DOM 节点的property 

property: 能够获取DOM元素，`修改JS变量的属性` 改变页面样式的形式

```js
const pList = document.querySelectorAll('p')
p.style.width = '100px' 
p.className = 'p1'

//获取nodeName 和 nodeType
console.log(p.nodeName) // p
console.log(p.nodeType) //一般dom元素类型是1
```


## DOM节点attribute形式
```js
p1.setAttribute('data-name','imooc')
p1.getAttribute('data-name')

p1.setAttribute('style', 'font-size:50px')
p1.getAttribute('style')
```

Property 与 attribute 区别

- property: `修改对象属性`，不会体现到html结构中
- attribute: `修改html属性`，会改变html结构
- 两者都有可能引起dom重新渲染

## DOM结构操作

增删移动节点怎么实现呢？　

```js
const div1 = document.getElementById('div1')
/****************新增节点*******************/
const p1 = document.createElement('p')
div1.appendChild(p1)//添加新创建元素

/****************移动节点*******************/
const p2 = document.getElementById('p2') 
div1.appendChild(p2)
//已有节点 执行appendChild会移动节点

/****************获取父元素*******************/
p1.parentNode

/****************获取子元素*******************/
const child = div1.childNodes 
//如果这个div里有一个<p>标签，会展示NodeList(2),因为一个是p标签一个是p标签里的text

/****************删除节点*******************/
div1.removeChild(child[0])
```

## DOM 性能

- 对DOM查询做缓存
简单说 就是把需要多次访问的 提前储存在新变量里

```js

for(let i = 0; i < document.getElementById('p').length; i++>){
    //每次循环都会计算length，频繁对DOM进行查询
}

//使用缓存

const pList = document.getElementsByTagName('p')
//缓存length,循环前，只进行一次dom查询
const length = pList.length
for(let i=0; i<length; i++)
```

- 将频繁操作 改为一次性操作

```js
const list = document.getElementById('list')

const frag = document.createDocumentFragment()

for(let i = 0; i < 10; i++){
    const li = document.createElement('li')
    li.innerHTML = `List Item ${i}`
    frag.appendChild(li)
    //list.appendChild(li)
}
//都完成后统一插入DOM中
list.appendChild(frag)
```




