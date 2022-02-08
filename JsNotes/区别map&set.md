# SET
---
```js
const myArray = [1,2,3,4,5]
const mySet = new Set(myArray)

console.log(myArray) // [1,2,3,4,5]
console.log(mySet) // Set {1,2,3,4,5}

//去重
const myArray = [1,2,3,4,5,5,,5,5,1]
const mySet = new Set(myArray)

console.log(myArray) // [1,2,3,4,5,5,,5,5,1]
console.log(mySet) // Set {1,2,3,4,5}

//只是展示number
const uniqueArray = [...mySet]
console.log(uniqueArray) // {1,2,3,4,5}
```

Add

```js
const myArray = [1,2,3,4,5]
const mySet = new Set(myArray)
//add number
mySet.add(6)
console.log(mySet) //Set {1,2,3,4,5,6}

//add string
mySet.add('6')
console.log(mySet) //Set {1,2,3,4,5,'6'}

//add Object
mySet.add({channelName: 'JavaScript '})
console.log(mySet) //Set {1,2,3,4,5,{channelName: 'JavaScript '}}

//add array
mySet.add([1,2,3])
console.log(mySet) //Set {1,2,3,4,5,[1,2,3]}

```

Delete

```js
const myArray = [1,2,3,4,5]
const mySet = new Set(myArray)
mySet.delete(6)
console.log(mySet) //Set {1,2,3,4,5}
```

clear

```js
mySet.clear();//清空array
```

has
```js
const myArray = [1,2,3,4,5]
const mySet = new Set(myArray)
console.log(mySet.has(6)); //false
console.log(mySet.has(5)); //true
```

## ARRAY && SET
SET没有idex
```js
const myArray = [1,2,3,4,5]
const mySet = new Set(myArray)
console.log(myArray[3]) //4
console.log(mySet[3]) //undefined
```

## Iteration Over Set
for..of / forEach
```js
let set = new Set (["oranges", "apples", "bananas"])

// FOR...OF
for(let value of set) {
    console.log(value) //oranges apples bananas
}

// FOR EACH
set.forEach((value,valueAgain,set) => {
    console.log(value) //oranges apples bananas
})
```
注意有趣的是：forEach 有三个value，一个value，一个相同的value‘valueAgain’,然后target。实际上相同的值在参数中出现两次。
这是为了和map兼容，其中传递给foreach回调函数有三个函数，看起来奇怪，但是很容易使用set替换map


# MAP
---
```js
const myMap = new Map([ ['name', 'John'], ['surname', 'Doe']])
console.log(myMap) 
//Map {'name'=>'John', 'surname' => 'Doe'}
```

先看一段代码，意思是将a object 放进myObject里，他的值为'a'
```js
const myObject = {}
const a = {}
const b = {}

myObject[a] = 'a'
var obj = JSON.parse(myObject); 
console.log(myObject) //{'[object Object]':'a'} 这种结果显然不是我们想要的
```

## 使用MAP
Map 是data items的集合，就像object一样。但主要区别是，他的key允许任何类型

他的key的类型可以是：string,numeric, boolean,object等

### 基本使用方法

ADD

```js
const myMap = new Map([[{},'a'], [{},'b']]);
myMap.set({},'C')

console.log(myMap) //Map {{}=> 'a', {} => 'b',{} => 'c'}
```


DELETE
```js
const myMap = new Map([ [1,'one'] ]);
myMap.delete(1) //delete by specific key

console.log(myMap) //Map {}
```

CLEAR
```js
const myMap = new Map([ [1,'one'] ]);
myMap.clear()

console.log(myMap) //Map {}
```

HAS

只是针对KEY
```js
const myMap = new Map([ [1,'one'], [2,'two'] ])
console.log(myMap.has(1)) //true
console.log(myMap.has('one'))//false
```

GET

```js
const myMap = new Map([ [1,'one'], [2,'two'] ])
console.log(myMap.get(1)) //'one'
```


### 为什么使用map
使用object作为key是最显著的map的功能，但是object中的key只能使用string,不能再object中使用其他的object作为key
比如：
```js
const myObject = {}
const a = {}
const b = {}

myObject[a] = 'a' //object中使用object作为key
myObject[b] = 'b'

console.log(myObject) //{'[object Object]':'b'}

```
myObject是一个object，它转化(converts)所有的object key 比如 a{}, b{}. -> [object Object]，显然不是我们想要的

```js
const a = {};
const b = {};

const myMap = new Map([[a,'a'], [b,'b']]);
console.log(myMap); //Map {{}=> 'a', {} => 'b'}
```



## Iteration on Map
循环map，这里有3种方法
map.keys() => 返回循坏key
map.values() => 返回循坏value
map.entries() => 返回循坏的[key,value],被使用于for..of

```js
let recipe = new Map([ ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50] ])

  //循坏key
  for(let vegetable of recipe.keys()){
      console.log(vegetable) //cucumber, tomatoes, onion
  }

  //循坏values
  for(let vegetable of recipe.values()){
      console.log(vegetable) //500, 350, 50
  }

  //循坏entries，这个entry名字不能变

  for(let entry of recipe){
      console.log(entry) //cucumber,500 (and so on)
  }

```

## Map from object (object.entries)
创建一个map from object, 使用object.entries(obj) 它返回的是一个object的key/value 这种格式的数组
可以理解为使用Object.entries将object变成了一个map
```js
let obj = {name:"John", age:30};
let map = new Map(Object.entries(obj))
console.log(map.get('name')) // John
```

## Object from Map(Object.fromEntries)

object.entries(obj)从 object 创建 map, object.fromEntries可以反过来，give array of [key,value],创建一个object

使用Object.fromEntries 得到 plain object from Map.

```js
let prices = Object.fromEntries([['banana', 1],
  ['orange', 2],
  ['meat', 4]])
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
```

如果我们把它存储到了map里，想变成object
```js
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries())// make a plain object (*)
// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2

```
使用map.entries()会返还一个[key,value]的iterable

```
let obj = Object.fromEntries(map)
```
这是一样的，因为object.fromEntries是期望iterable object作为参数，但是不一定是数组。