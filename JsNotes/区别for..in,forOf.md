# Difference Between ‘for…in’ and ‘for…of’ 

## Enumerables vs Iterables (可枚举 VS 可迭代)
为了了解 for...in 与 for ...of区别，先要搞清楚可枚举与可迭代区别

可以把可枚举看作长方形，可迭代看作正方形。 因此所有可迭代的都是可枚举的，但是并不所有的可枚举的都是可迭代的。

可枚举（enumerable）：可枚举的对象是一个实体，在这个实体种，他的各个部分都可以被清楚的识别和引用

可迭代（iterable）: 在重复中进行，可迭代的对象是对每项执行同一组操作的实体

举例： 
1. 一袋MM豆 是 可枚举的
2. 一堆书 是 可枚举的
3. 书架上一排书 可迭代的
4. JSON object 是可枚举的
5. JSON arrays 可迭代的
   
区别关键：可迭代有内部顺序，可枚举块有不同的部分，他们是无序的

## for..in
for...in用来遍历可枚举的对象，所以这对于count 对象种键值对是完美的

```js
let person = {
   "first_name": "Jonathan",
   "last_name": "Hsu",
   "medium-handle": "@jhsu98"
}

for(const key in person) {
   console.log(key + ": " + person[key]);
}
/*
"first_name: Jonathan"
"last_name: Hsu"
"medium-handle: @jhsu98"
*/
```
for...in在循环中，会将临时变量设置为对象的每个key,所以在这个例子种被计算的是identifiers

## for...of

遍历可迭代对象

```js
let scores = [43,58,28,69,38];

for(let item of scores){
    console.log(item) 
}
/*
43
58
28
69
38
*/
```

如果使用 for...of 用来枚举，就会出现 下列的error

```js
let person = {
   "first_name": "Jonathan",
   "last_name": "Hsu",
   "medium-handle": "@jhsu98"
}
for(const item of person) {
   console.log(item);
}

/*
"TypeError: person is not iterable
    at gewuhimaza.js:6:84
    at https://static.jsbin.com/js/prod/runner-4.1.7.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.7.min.js:1:10866"
*/
```

## Array是可枚举的

比如 将可枚举的使用for...of会产生错误，但是如果把可迭代的放进for...in中是可以被接受的

```js
let scores = [43,58,28,69,38];

for(const item in scores){
     console.log(item);
}

/*
"0"
"1"
"2"
"3"
"4"
*/
```

类似于for...in是如何数对象的identifier,那对于array，他就会去数他的Index，他将index 作为identifier