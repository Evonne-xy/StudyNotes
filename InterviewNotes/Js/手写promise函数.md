# 手写promise函数

1. 初始化&异步调用
   
2. then catch 链式调用 
   
3. API .resolve .reject .all .race

```js
const p = new MyPromise(function(resolve, reject) {
    resolve(100)
})

const p11 = p1.then(data=>{ promise
    return data + 1 //返回一个新的
})

const p12 = p11.then(data=>{
    return data + 2
})

const p13 = p12.catch(err => {
    console.log(err)
})

const p2 = MyPromise.resolve(200)
const p3 = MyPromise.reject('错误信息')
const p4 = MyPromise.all([p1,p2])
const p5 = MyPromise.race([p1,pw])
```
