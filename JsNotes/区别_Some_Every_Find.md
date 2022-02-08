##  some() every() find()区别

```js
var operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];
```

### some() 是用来确定这个数组里是否有一个或者多个值与你想找的内容匹配

例如下面这个，我需要找到这个ARRAY中是否有pilot


```js
var ifExistPilot = operatives.some(function(operative){ 
    return operative.pilot;
} )
```
这就是将operatives作为一个参数，查看是否有pilot，该函数必须返回一个BOOLEAN值，只要返回一个true, some()就会返回true,如果没有一个值返回true,那么some()返回false
some()不会执行完，例如这个例子，他只会执行到第二条。


### every() 也可以检查数组中是否有匹配的项，但是不同的是，只有每个匹配的项都是true，才会返回true


### find() 会返回符合条件的第一个值，注意是值不是bolean值

和前面一样，这次我不想找是否有飞行员，这次需要的是这pilot的信息

```js
var ifExistPilot = operatives.find(function(operative){
    return operative.pilot;
})
```
代码和some()的完全相同，区别是find返回的是一个具体的值，而不是bolean值。find()将返回第一个匹配的值，尽管下面依旧有匹配的项，如果项返回所有符合条件的值，则需要用filter。


---