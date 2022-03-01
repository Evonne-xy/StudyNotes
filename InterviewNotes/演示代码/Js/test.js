class MyPromise {
  state = "pending";
  value = null;
  reason = null;

  resolveCallback = [];
  rejectCallback = [];
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
        this.rejectCallback.forEach((fn) => fn(this.value));
      }
    };

    try {
      fn(resolveHandler, rejectHandler);
    } catch (err) {
      rejectHandler();
    }
  }

  then(fn1, fn2) {
    fn1 = typeof fn1 === "function" ? fn1 : (v) => v;
    fn2 = typeof fn2 === "function" ? fn1 : (e) => e;

    if (this.state === "pending") {
      return new MyPromise((resolve, reject) => {
        this.resolveCallback.push(() => {
          try {
            const newValue = fn1(this.value);
            resolve(newValue);
          } catch (err) {
            reject(err);
          }
        })

        this.rejectCallback.push(() => {
          try {
            const newReason = fn2(this.reason);
            resolve(newReason);
          } catch (err) {
            reject(err);
          }
        })
      })
    }

    if (this.state === "fulfilled") {
      return new MyPromise((resolve, reject) => {
        this.resolveCallback.push(() => {
          try {
            const newValue = fn1(this.value);
            resolve(newValue);
          } catch (err) {
            reject(err);
          }
        });
      });
    }

    if (this.state === "rejected") {
      return new MyPromise((resolve, reject) => {
        this.rejectCallback.push(() => {
          try {
            const newReason = fn2(this.reason);
            resolve(newReason);
          } catch (err) {
            reject(err);
          }
        });
      });
    }
  }

  catch(fn2) {
    return this.then(null,fn2)
  }
}

const p11 = new MyPromise((resolve, reject) => {
    // resolve(100);
    setTimeout(() =>{
        resolve(100);
    },1000)
});

const p12 = p11.then((res1) => {
    console.log('res1' , res1)
    return res1 + 1
});


const p13 = p12.then((res2) => {
    console.log('res2' , res2)
    return res2 + 1
});


