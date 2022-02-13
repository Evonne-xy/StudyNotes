## variable shadowing

什么是 variable shadowing？
variable shadowing 发生在当一个 inner scope 的 variable 和 outer scope 的 的 variable 名字一样。这个的 variable 就会 scope 重叠

variable scoping rules：
inner scope 可以 access outer scope 的 variable。

```javascript
let number = 10;

function displayDouble() {
  //a new variable is defined with the same name as variable on line 1 - outer scope
  let number = 3;

  number *= 2;
  console.log(number); //=> 6
}

displayDouble();
console.log(number); //=> 10
```

这个例子中在 outer scope 和 inner scope 都有一个名字叫 number 的变量。
产生的结果是：outer scope 定义的变量会被 inner scope 隐藏。

1. 他会防止 inner scope 的变量 access outer scope 的变量
2. 他会防止 inner scope 去改变和重新定义 outer scope 的变量

所以这个例子中：

1. 在 inner scope 我们不能够访问到外部名字叫 number 的变量
2. number 在 inner scope 里的不能修改 outer scope 的 number 变量