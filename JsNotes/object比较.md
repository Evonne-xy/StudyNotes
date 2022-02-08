## 引用比较

三种方法
1. 严格相等操作符 ===
2. 松散相等操作符 ==
3. Object.is 函数


```js
const hero1 = {
  name: 'Batman'
};
const hero2 = {
  name: 'Batman'
};

hero1 === hero1 // true
hero1 === hero2 // false

hero1 == hero1 // true
hero1 == hero2 // false

Object.is(hero1, hero1); //true
Object.is(hero1, hero2); //false
```
hero1 === hero1 原因：：因为两个操作数都指向同一个对象实例Hero1
Hero1 === hero2的计算结果为false，因为操作数Hero1和hero2是不同的对象实例。
当你想比较这两个对象的引用时，可以使用这三个方法
什么时引用？就是看他们是不是都指向同一个对象地址

但是多数情况，想要比较的是actual content

## 人工比测
比较对象的一种明显方法是读取属性并手工比较它们。

```js
function isHeroEqual(object1, object2) {
  return object1.name === object2.name;
}
const hero1 = {
  name: 'Batman'
};
const hero2 = {
  name: 'Batman'
};
const hero3 = {
  name: 'Joker'
};
isHeroEqual(hero1, hero2); // => true
isHeroEqual(hero1, hero3); // => false
```

isHeroEqual()访问两个对象的属性名并比较它们的值。

对于简单的对象，这不是问题。但是要比较较大的对象(或未知结构的对象)，手动比较并不方便，因为它需要大量的样板代码。

## 浅相等

在对象的浅层相等性检查期间，您获得两个对象的属性列表(使用Object.keys())，然后检查属性的值是否相等。

```js
function shallowEqual(object1, object2){
    const keys1 = Object.keys(object1); 
    const keys2 = Object.keys(object2); 

    // hero1 2比较，keys1 2均为 [ 'name', 'realName' ]
    //hero1 3比较 keys1：[ 'name', 'realName' ],keys2:['name']
    if(keys1.length !== keys2.length){
        return false
    }

    for(let key of keys1){
        //object[key]为：Batman, Bruce Wayne
        if(object1[key] !== object2[key]){
            return false
        }
    }
    return true
}
```

```js
const hero1 = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const hero2 = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const hero3 = {
  name: 'Joker'
};
shallowEqual(hero1, hero2); // => true
shallowEqual(hero1, hero3); // => false
```

shallowEqual(hero1, hero2)返回true，因为hero1和hero2对象具有相同的属性(name和realName)和相同的值。

另一方面，由于hero1和hero3的属性不同，所以shalowequal (hero1, hero3)返回false。

但是万一对象是一个嵌套的呢？该如何比较？看看是不是可以使用浅比较
```js
const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
shallowEqual(hero1, hero2); // => false
```

这一次，即使hero1和hero2的内容相同，shallow weequal (hero1, hero2)返回false。

hero1.address 和 hero2.address是不一样的object，因此浅比较认为hero1.address 和 hero2.address是不同的value

## 深相等 deep quality

深相等和浅相等相似，但是有一点不同，在浅相等时比较的时objects
看一下 deep quality 检查
```js
function deepEqual(object1,object2){
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if(keys1.length != keys2.length){
    return false; 
  }

  for(const key of keys1){
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2)

    if(areObjects && !deepEqual(val1,val2) || !areObjects && val1 != val2){
      return false
    }
  }
  return true
}

function isObject(object){
  return object != null && typeof object === 'object'
}
```

areObjects && !deepEqual(val1,val2) 暗示这些比较的property是objects，使用递归来验证嵌套的对象是否相等

```js
const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
deepEqual(hero1, hero2); // => true
```

深度相等可以准确的确定嵌套的对象hero1 hero2，如果深入比较对象可以使用
1. util.isDeepStrictEqual(object1,object2); // built in util module
2. _.isEqual(object1,object2); of lodash library

```js
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
 
object === other;
// => false
```

## Install lodash with vue

```
# npm

npm i --save lodash
```

### A import 整个 lodash library
```js
<script>
import _ from 'lodash';

const range = _.range(1, 3); // [1, 2]
const random = _.random(0, 5); // an integer between 0 and 5
</script>
```

### B import specific lodash functions

##### B1 Default import 
您可以直接从特定的路径单独导入它们
```js
<script>
import _range from 'lodash/range';
import _random from 'lodash/random';

const range = _range(1, 3);
const random = _random(0, 5);
</script>
```

#### B-2. Named Import
您也可以单独从lodash直接导入
```js
<script>
import { range, random } from 'lodash';

const range = range(1, 3);
const random = random(0, 5);
</script>

```

#### B-3. Named Import + Rename
但我喜欢区分我的Lodash函数。因此，您可以使用as将其重命名为您希望的任何名称。习惯上是_，所以我把它加到函数前面。
```js
<script>
import { range as _range, random as _random } from 'lodash';

const range = _range(1, 3);
const random = _random(0, 5);
</script>

```


   