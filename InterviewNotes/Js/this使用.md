## This keywords

<mark>this取什么值实在函数执行的时候确定的，而不是函数定义的时候确定的</mark>

### （作为函数调用 -> 指向全局对象，严格模式 undefined）默认绑定

```javascript
function fn1(){
    console.log(this); => window
}
fn1();
```

### 调用对象方法 -> 指向这个方法的对象

setTimeOut 这个函数执行是setTimeOut本身触发的执行，并不是zhangSan.sayHi()这种方式触发的，作为普通函数被执行，不是作为对象方法被执行

```javascript
const zhangSan = {
  name:'张三',
  sayHi(){
    console.log(this) //this指向当前对象 ‘张三’
  },
  wait(){
    setTimeOut(function(){
      console.log(this) 
    })
  }
  waitAgain() {
        setTimeout(() => {
            // this 即当前对象
            // 箭头函数this永远取上级作用域this
            console.log(this);
        });
    }

}

zhangSan.sayHi(); //'张三'
```

### 特殊调用 -> 指向参数成员 

call里面传入一个对象，那他打印的就是这个对象
bind需要返回一个函数，然后再重新执行这个函数

```javascript
var girlName = {
    name:'amy',
    sayName:function(){
        console.log(this.name);
    }
}
var girl1 {
            name : 'Sally'
          }
var girl2 {
            name : 'Jennie'
          }
girlName.sayName.call(girl1); //-> sally
girlName.sayName.call(girl2); //-> Jennie

const girlName2 = girlName.sayName.bind(girl1)
girlName2() //sally

```

### 构造函数绑定 (new)-> 指向这个函数

```javascript
function lover(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name); -》 amy
    }
}
var amy = new lover('amy');
amy.sayName();
```

#### Arrow function -》指向的是父级对象

```javascript
let fn = {
  name: "Sally",
  init: () => {
    console.log(this.name); //=> undified
  },
};
fn.init();
```

如果是 function，就会产生隐式绑定

```javascript
let fn = {
  name: "Sally",
  init: function () {
    console.log(this.name); //=> Sally
  },
};
fn.init();
```

---