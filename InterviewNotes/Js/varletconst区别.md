### var let const 区别

#### 1. scope

let const 是 block scope
var 是 function scope

```javascript
if (true) {
  var varVariable = "This is true";
}
console.log(varVariable);

if (true) {
  let letVariable = "This is true";
}
console.log(letVariable);

if (true) {
  const constVariable = "This is true";
}
console.log(constVariable);
```

输出结果

```
This is true
ERROR!
ERROR!
```

#### 2. Redeclare

Var 可以重新申明
let const 不可以

```javascript
var varVariable = "This is true";
var varVariable = "This is false";
console.log(varVariable);

let letVariable = "This is true";
let letVariable = "This is false";
console.log(letVariable);

const constVariable = "This is true";
const constVariable = "This is false";
console.log(constVariable);
```

输出结果

```
This is false

ERROR!

ERROR!

```

#### 3. 创建一个新的 variable 在使用之后

var 允许创建一个 variable 在使用之后，仍然允许我们去运行，然后认为那个 variable 是存在的
let const 不可以

```javascript
console.log(varVariable);
var varVariable = true;

console.log(letVariable);
let letVariable = true;

console.log(constVariable);
const constVariable = true;
```

输出结果

```
undefined

Uncaught ReferenceError: Cannot access 'letVariable' before initialization

Uncaught ReferenceError: Cannot access 'constVariable' before initialization
```

### declare and update

const 不能够被更新也不能被重新申明，但是 let 和 var 可以

```javascript
let letVariable = 2;
const constVariable = 2;

letVariable = 3;
constVariable = 3;
```

输出结果

```
Uncaught TypeError: Assignment to constant variable.
```

const 不允许改变的 actual value 或者重新定义他，但是改变他的属性是可以的

```javascript
const constVariable = { name: "Amy" };
constVariable.name = "Evonne";
console.log(constVariable.name);
```

输出结果

```
Evonne
```