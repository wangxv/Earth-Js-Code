function MyPromise(executor) {
  this.status = "pending"; // 初始状态为pending
  this.value = undefined; // 用于保存异步操作的结果
  this.reason = undefined; // 用于保存异步操作失败的原因
  this.onFulfilledCallbacks = []; // 成功回调函数队列
  this.onRejectedCallbacks = []; // 失败回调函数队列 // 立即执行executor函数，传入resolve和reject函数
  const resolve = (value) => {
    if (this.status !== "pending") return;
    this.status = "fulfilled";
    this.value = value;
    this.onFulfilledCallbacks.forEach((callback) => callback());
  };
  const reject = (reason) => {
    if (this.status !== "pending") return;
    this.status = "rejected";
    this.reason = reason;
    this.onRejectedCallbacks.forEach((callback) => callback());
  }; // 捕获executor函数中抛出的异常
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
// then方法，用于指定Promise成功或失败时要执行的回调函数
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const promise2 = new MyPromise((resolve, reject) => {
    // 处理Promise状态为fulfilled的情况
    if (this.status === "fulfilled") {
      setTimeout(() => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 0);
    } // 处理Promise状态为rejected的情况
    else if (this.status === "rejected") {
      setTimeout(() => {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 0);
    } // 如果Promise状态还为pending，则将其回调函数加入队列中
    else {
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    }
  });
  return promise2;
};
// 静态方法resolve，用于将现有值转换为Promise对象
MyPromise.resolve = function (value) {
  return new MyPromise((resolve) => {
    resolve(value);
  });
};
// 静态方法reject，用于返回一个带有拒绝理由的Promise对象
MyPromise.reject = function (reason) {
  return new MyPromise((_, reject) => {
    reject(reason);
  });
};
// 使用示例
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功!");
  }, 1000);
});
promise.then(
  (value) => console.log(value), // 输出 '成功!'
  (reason) => console.log(reason) // 不会执行
);


function myPromise1 (executor) {
  this.status = 'pending';
  this.value = undefined;
  this.reason = undefined;
  this.fulfilledCallbacks = [];
  this.rejectedCallbacks = [];

  const resolve = (value) => {
    if (this.status ==! 'pending') return;

    this.status = 'fulfilled';
    this.fulfilledCallbacks.forEach((fn) => fn());
  }
  const reject = (reason) => {
    if (this.status ==! 'pending') return;

    this.status = 'rejected';
    this.rejectedCallbacks.forEach((fn) => fn());
  }

  try {
    executor(resolve, reject);
  } catch(e) {
    reject(e);
  }
}

myPromise1.prototype.then = (onFulfilled, onRejected) => {
  let myPromise2 = new myPromise1((resolve, reject) => {
    if (this.status === 'fulfilled') {
      setTimeout(() => {
        try {
          let value = onFulfilled();
          resolve(value);
        } catch(e) {
          reject(e);
        }
      }, 0)
    } else if (this.status === 'rejected') {
      setTimeout(() => {
        try {
          let reason = onRejected();
          resolve(reason);
        } catch(e) {
          reject(e);
        }
      })
    } else {
      this.fulfilledCallbacks.push(() => {
        setTimeout(() => {
          try {
            let value = onFulfilled();
            resolve(value);
          } catch(e) {
            reject(e);
          }
        }, 0)
      });
      this.rejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let reason = onRejected();
            resolve(reason);
          } catch(e) {
            reject(e);
          }
        })
      })
    }
  })
  return myPromise2;
}