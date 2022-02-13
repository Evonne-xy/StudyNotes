### 手写apply call bind函数
```js
function fn1(a,b,c){
    console.log('this',this);
    console.log(a,b,c);
}
```

*****************************************手写call**************************************
```js
Function.prototype.call1 = function(ctx,...arguments){
//将方法挂载传入的ctx
//挂载后的方法进行调用
//删除这个多余的方法
    ctx.fn = this;
    ctx.fn(...arguments)
    delete ctx.fn
}

fn1.call1({x:10},11,12,13)
```

/*****************************************手写apply**************************************/
```js
Function.prototype.apply1 = function(ctx,arguments = []){
    ctx.fn = this
    if(arguments && !(arguments instanceof Array)){
        throw('arguments is not array')
    }
    ctx.fn(...arguments)
    delete ctx.fn

}

fn1.apply1({x:1},['hello','world','haha'])
```


/*****************************************手写bind**************************************/

第一种
```js

Function.prototype.bind1 = function(ctx,...args1) {
    return (...arg2)=> {
        ctx.fn = this
        ctx.fn(...args1.concat(arg2))
    }
    
}

const fn2 = fn1.bind1({x:100},99,98,97)
fn2(13)
```


第二种
```js

Function .prototype.bind1 = function(){
    //arguments是列表的形式，将它变为数组
    const arr = Array.prototype.slice.call(arguments)
     //获取this(数组第一项，也就是{x;100})
    const t = arr.shift()
    //bind1是fn1会调用的方法，存入的是function的prototype里，那就是function自带的方法，
    //所以当fn1.bind()时候，bind里面所写的this指向的就是fn1本身
    const self = this

    return function(){ 
        return self.apply(t,arr)
    }
}

const fn2 = fn1.bind1({x:10},15,20,30)

```