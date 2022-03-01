## promise基本使用

### promise

为什么有promise？ promise主要是解决回调地狱的问题。
什么是回调地狱，看下述代码
```js
//获取第一份数据
$.get(url1,(data1) => {
    console.log(data1)

    //获取第二份数据
    $.get(url2,(data2) => {
        console.log(data2)

        //获取第三份数据
        $.get(url2,(data2) => {
        console.log(data2)
        })

    })
})
```
可以看到这个是使用callback一点点嵌套的获取，但是这么写代码，使得代码难以编写和维护，同时增加了识别应用程序流难度，如果后期调试起来会很麻烦。

使用Promise 将callback变成了管道形式，是非嵌套形式，是串联形式

```js
function getData(){
    return new Promise(resolve, reject)=>{
        $.ajax({
            url,
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}
```


## 三种状态

三种状态 pending resolved rejected

（画图表示转换关系，以及转换不可逆）

```js
// 刚定义时，状态默认为 pending
const p1 = new Promise((resolve, reject) => {

})

// 执行 resolve() 后，状态变成 resolved
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    })
})

// 执行 reject() 后，状态变成 rejected
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    })
})

```

```js
// 直接返回一个 resolved 状态
Promise.resolve(100)
// 直接返回一个 rejected 状态
Promise.reject('some error')
```

### promise 是怎么管理异步的

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("a");
    resolve("resolve");
    console.log("b");
  }, 0);
}).then(
  (res) => {
    console.log("status:", res);
  },
  (res) => {
    console.log("status:", res);
  }
);
```
首先做这道题钱先了解promise是如何管理异步的，promise参数回调函数体内可以接收两个参数resolve/reject,这两个参数可以作为回调函数

Promise: Promise 本身是同步的立即执行函数，当在 executor 中执行 resolve或者 reject 的时候，此时是异步操作，会先执行 then/catch 等，当主栈完成时，才会去调用 resolve/reject 方法中存放的方法。

1. resolve()：是再异步操作成功后执行，可以返回值，.then()中第一个参数接收
   
2. reject()：异步操作失败后进行，可以提供返回值，.then()第二个参数接收

3. resolve()和reject()只传递一个参数，promise状态发生改变后，不会变化
   
4. `resolve() reject()都是异步操作`，执行代码时候，会先执行同步代码，等主要 任务为空时，再去调用resolve/reject存放方法执行


然后我们来看这道题：
首先是setTimeout放入call stack中，callback 会被存在webAPI 里。然后再去执行下面的代码，发现是then()，将里面的回调函数放入web api里。



## 状态和 then catch

状态变化会触发 then catch —— 这些比较好理解，就不再代码演示了

- pending 不会触发任何 then catch 回调
- 状态变为 resolved 会触发后续的 then 回调
- 状态变为 rejected 会触发后续的 catch 回调

-----

then catch 会继续返回 Promise ，**此时可能会发生状态变化！！！**

```js
// then() 一般正常返回 resolved 状态的 promise
Promise.resolve().then(() => {
    return 100
})

// then() 里抛出错误，会返回 rejected 状态的 promise
Promise.resolve().then(() => {
    throw new Error('err')
})

// catch() 不抛出错误，会返回 resolved 状态的 promise
Promise.reject().catch(() => {
    console.error('catch some error')
})

// catch() 抛出错误，会返回 rejected 状态的 promise
Promise.reject().catch(() => {
    console.error('catch some error')
    throw new Error('err')
})
```

看一个综合的例子，即那几个面试题

```js
// 第一题
Promise.resolve().then(() => {
    console.log(1) //1 
}).catch(() => {
    console.log(2) //不执行！resolve状态只会执行then
}).then(() => {
    console.log(3) //3
})


// 第二题
Promise.resolve().then(() => { 
    console.log(1)//1
    throw new Error('erro1') //报错 所以返回 rejected 状态的 promise，
}).catch(() => { // 没报错 返回 resolved 状态的 promise
    console.log(2) //2 
}).then(() => {
    console.log(3) //3
})//最后返还resolved

// 第三题
Promise.resolve().then(() => { // 返回 rejected 状态的 promise
    console.log(1) //1
    throw new Error('erro1')
}).catch(() => { // 返回 resolved 状态的 promise
    console.log(2) //2
}).catch(() => {
    console.log(3)
})
```


Promise同时进行该如何写呢？promise all

```js
const promise1 = new Promise((resolve,reject) => {
  if(true){
      resolve('video1 record');
  }
  reject('Failed to record');
});
const promise2 = new Promise((resolve,reject)=>{
  resolve('video 2 record');
});
const promise3 = new Promise((resolve,reject)=>{
  resolve('video 3 record');
});

//一般情况会使用一个promise然后再让他做些事情
promise1.then((message)=>{
  console.log('This is a message' + message); 
  }).catch((message) => {
    console.log('This is in catch' + message);
  })

//如果想让promise 1 2 3同时进行，可以使用 promise.all

Promise.all([promise1,promise2,promise3]).then((message) => {

  console.log(message);//[ 'video1 record', 'video 2 record', 'video 3 record' ]

})

```





