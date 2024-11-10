
/**
 * 1、接收一个参数executor（执行器函数）该函数有两个参数 resolve和reject
 * 2、state表示Promise当前的状态（pending, fulfilled, rejected）
 * 3、value和reason存储成功的结果和失败的原因
 * 4、onFulfilledCallbacks和onRejectedCallbacks：分别存储成功和失败的回调函数队列。
 * 
 * 5、resolve和reject函数： 更改Promise的状态，并调用相应回调函数队列。
 * 6、then方法：注册成功和失败的函数回调
 */
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => this.handleCallback(callback, true));
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => this.handleCallback(callback, false));
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
      }
    }

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  handleCallback(callback, isFulfilled) {
    const microtask = () => {
      try {
        callback();
      } catch (error) {
        if (isFulfilled) {
          console.error('Unhandled error in fulfilled callback:', error)
        } else {
          console.error('Unhandled error in rejected callback:', error);
        }
      }
    };
    microtask();
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleSuccess = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result instanceof MyPromise ? result : { fulfilled: true, value: result });
        } catch (error) {
          reject(error);
        }
      };

      const handleFailure = (reason) => {
        try {
          const result = onRejected ? onRejected(reason) : { rejected: true, reason: reason };
          result instanceof MyPromise ? result : reject({ rejected: true, reason: result });
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        this.handleCallback(() => handleSuccess(this.value), true);
      }
      if (this.state === 'rejected') {
        this.handleCallback(() => handleFailure(this.reason), false);
      }
      if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() =>  this.handleCallback(() => handleSuccess(this.value), true));
        this.onRejectedCallbacks.push(() => this.handleCallback(() => handleFailure(this.reason), false));
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(onFinally) {
    return new MyPromise((resolve, reject) => {
      const promise = this;
      const handleFinally = () => {
        try {
          const result = onFinally();
          result instanceof MyPromise ? result.then(resolve, reject) : resolve();
        } catch (error) {
          reject(error);
        }
      };
 
      promise.then(
        value => {
          handleFinally();
          resolve(value);
        },
        reason => {
          handleFinally();
          reject(reason);
        }
      );
    });
  }
}

// 使用示例
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});
 
promise
  .then(value => {
    console.log(value);
    return 'Next step';
  })
  .then(value => {
    console.log(value);
    throw new Error('Something went wrong');
  })
  .catch(error => {
    console.error('Caught error:', error);
  })
  .finally(() => {
    console.log('Execution completed, regardless of outcome.');
  });