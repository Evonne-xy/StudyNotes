## 函数式编程
考虑的是： takes input and give an output

Not functional(imperative style 命令式编程)
```js
var name = “Anjana”;
var greeting = “Hi, I’m ”;
console.log(greeting + name);=> “Hi, I’m Anjana”

```

functional way
```js
function greet(name) {
  return “Hi, I’m ” + name;
  }
  greet(“Anjana”);// “Hi, I’m Anjana”

```

1. Avoid side effects -> 使用pure function

Not Pure
1. not input 
2. do not have return 
```js
var name = “Anjana”;
function greet() {
  console.log(“Hi, I’m ” + name);
  }
```

Pure function

```
function greet(name) {
  return "Hi I am " + name; 
}
```

2. Use Higher-order function
将function认为是object， 可以function套function这样

```js
function makeAdjectifier(adjective){
  return function(){
    return adjective + '' + string
  }
}

var coolifire = makeAdjectifier('cool');
coolifire('conference'); // cool conference

```

3. Do not use iterate
   避免使用for while, 使用map reduce filter 
   ![map-reduce-sandwich](Img\map-reduce-sandwich.png)

vegetable ->比作 list 
map -> get out new list(每个都被切好了)
reduce -> combine theses
filter -> 不喜欢黄瓜，将黄瓜剔除


4. avoid mutability 避免易变
   
不想让data进行改变,比如有个人把 room改变了，你需要去找，很难去track

Mutation (bad!):
```js
var rooms = [“H1”, “H2”, “H3”];
rooms[2] = “H4”;rooms; // ["H1", "H2", "H4"]
```

room就不会变
No mutation (good!):
```js
var rooms = [“H1”, “H2”, “H3”];
Var newRooms = rooms.map(
  function (rm) {  
    if (rm == “H3”) { 
      return “H4”; 
    }  else { 
      return rm; }});
      newRooms; // ["H1", "H2", "H4"]rooms; // ["H1", "H2", "H3"]

```

## 数据结构 && 不变的data

使用copy的这种数据结构会造成程序不高效，所以这就需要tree.

```
Array：[h1, h2, h3]

copy Array: [h1, h2, h4] //replace H3
```
可以看到上面的展示，花费时间

所以如果把第一个array 作为一个tree, 每个元素都作为tree的一个node. 如果想替换，就建立一个新的node，把他连接到h4上，不需要重新建立一个array，再去替换



