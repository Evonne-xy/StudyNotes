## [object Object] 是什么
[object Object] 是对象字符串的形式，他表示的是一个对象，可以使用JSON.stringfy()来避免

比如你想alert一个对象的实例，当你alert的时候就调用了toString()在这个object上，默认的执行会返回[object Object]

```js
var objA = {}
var objB = new Object
var objC = {}
objC.toSting = function(){return "objC"}

alert(objA) // [object Object]
alert(objB) // [object Object]
alert(objC) // objC
```
如果你想inspect这个object,你可以使用 
JSON.stringify(JSONobject)
console.log(JSONobject)






