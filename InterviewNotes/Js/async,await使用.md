## async/await 和 Promise 的关系

不互斥，两者相辅相成的

- async 函数返回结果都是 Promise 对象（如果函数内没返回 Promise ，则自动封装一下）
- await 相当于Promise的then
- try...catch可捕获异常，代替了Promise

下面我用例子挨个解释这三条 

- async 函数返回结果都是 Promise 对象（如果函数内没返回 Promise ，则自动封装一下）
```js
async function fn1(){
  return 100
  //相当于 return Promise.resolve(100)
}

const resolve = fn1()
console.log(resolve) //100 promise对象

resolve.then(data=>{
  console.log('data' data) //100
})
```

- await 相当于Promise的then

1. await + Promise 对象(必须是resolve的状态)
   
2. await + 某个值 -> 它会把他封装成promise对象
   
3. await + async function (因为async返还的是promise对象)

下面看一下代码来解释上述情况

1. await + Promise 对象
```js
!(async function() {
  const p1 = promise.resolve(300); //返回promise对象
  const data = await p1
  console.log('data',data) //300
} )()
```

2. await + 某个值 -> 它会把他封装成promise对象
```js
!(async function() {
  const data = await 400 //返回值
  console.log('data',data) //400
} )()
```

3. await + async function (因为async返还的是promise对象)
```js
async function fn1(){
  return 100
}


!(async function() {
  const data = await fn1() //相当于await后面跟了一个promise
  console.log('data',data)
} )()
```


- try...catch可捕获异常，代替了Promise

```js
!(async function(){
  const p4 = Promise.reject('err')

  try{ 
    const res = await p4
    console.log(res)

  }catch(err){
    console.log(err)
  }
})()
```


## 异步本质

await 是同步写法，但本质还是异步调用。

```js
async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end') // 关键在这一步，它相当于放在 callback 中，最后执行
}

async function async2 () {
  console.log('async2')
}

console.log('script start')
async1()
console.log('script end')
```

即，只要遇到了 `await` ，后面的代码都相当于放在 callback 里。


```js
function muti(num){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(num * num)
        })
    },1000)
}
```


###  setTimeout、Promise、Async/Await 的区别

- setTimeout: setTimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行
  
- Promise: Promise 本身是同步的立即执行函数，当在 executor 中执行 resolve或者 reject 的时候，此时是异步操作，会先执行 then/catch 等，当主栈完成时，才会去调用 resolve/reject 方法中存放的方法。

- async: async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。



### for...of

```js
// 定时算乘法
function multi(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

// // 使用 forEach ，是 1s 之后打印出所有结果，即 3 个值是一起被计算出来的
// function test1 () {
//     const nums = [1, 2, 3];
//     nums.forEach(async x => {
//         const res = await multi(x);
//         console.log(res);
//     })
// }
// test1();

// 使用 for...of ，for...in 和 for可以让计算挨个串行执行
async function test2 () {
    const nums = [1, 2, 3];
    for (let x of nums) {
        // 在 for...of 循环体的内部，遇到 await 会挨个串行计算
        const res = await multi(x)
        console.log(res)
    }
}
test2()
```



### Promise then的写法，和使用async await写法

```js
function makeRequest(location){
  return new Promise ((resolve,reject) => {
    if(location === 'Google'){
      resolve('Google say hi');
    }else{
      reject('only talk to Google');
    }
  });
}

function processRequest(response){
  return new Promise((resolve,reject) => {
    resolve(`This is process Request + ${response}`);
  })
}

//promise,then
makeRequest('Google').then((response) => {
  return processRequest(response)
}).then((processResponse) => {
  console.log(processResponse) //This is process Request + Google say hi
}).catch((err) => {
  console.log(err); 
})

//await async

async function doWork(){
  const response = await makeRequest('Google');
  const processResponse = await processRequest(response);
  console.log(processResponse);

}
doWork();

```



