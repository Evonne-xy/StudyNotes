/**
*
@description MyPromise
@author Evonne
*/

class MyPromise {
  state = "pending"; //pending, fulfilled rejected
  value = undefined; //成功后的值
  reason = undefined; //失败后的值

  resolveCallback = []; // 存成功回调函数
  rejectCallback = []; //存失败回调函数
  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.resolveCallback.forEach((fn) => fn(this.value));
      }
    };
    const rejectHandler = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.rejectCallback.forEach((fn) => fn(this.reason));
      }
    };
    try {
      fn(resolveHandler, rejectHandler);
    } catch (err) {
      rejectHandler(err);
    }
  }

      then(fn1,fn2){
          fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
          fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

          if(this.state === 'pending'){
              const p1 = new MyPromise((resolve, reject) =>{
                  this.resolveCallback.push(()=> {
                      try {
                          const newValue = fn1(this.value)
                          resolve(newValue)

                      } catch (err) {
                          reject(err)
                      }
                  })

                  this.rejectCallback.push(()=> {
                      try {
                          const newReason = fn2(this.reason)
                          resolve(newReason)

                      } catch (err) {
                        reject(err)
                      }
                  })

              })
              return p1
          }

          if(this.state === 'fulfilled'){ //返回新的promise
              const p1 = new MyPromise((resolve, reject) =>{
                  try {
                      const newValue = fn1(this.value) //对应function(res) 返回结果就是return res = res + 1
                      resolve(newValue)//重新执行一遍resolveHandler

                  } catch (error) {
                      reject(err)
                  }
              })
              return p1
          }

          if(this.state === 'rejected'){
              const p1 = new MyPromise((resolve, reject) =>{
                  try {
                      const newReason = fn2(this.reason) //对应function(res) 返回结果就是return res = res + 1
                      resolve(newReason) //p1.reason

                  } catch (error) {
                      reject(err)
                  }
              })
              return p1
          }
      }

      //就是then的简单模式
      catch(fn2){
          return this.then(null,fn2)
      }
  }

MyPromise.resolve = function(value){
  return new MyPromise((resolve, reject) => resolve(value))
}

MyPromise.reject = function(value){
  return new MyPromise((resolve, reject) => reject(value))
}



//调用

const p = new MyPromise((resolve, reject) => {
  resolve(100);
});

const p11 = p.then((data1) => {
  console.log("data1", data1);
  return data1 + 1; //返回一个新的
});

const p12 = p11.then((data2) => {
  console.log("data2", data2);
  return data + 2;
});
