function promise(exector) {
  let self = this
  this.status = 'pending'
  this.value = undefined
  this.reason = undefined
  // 存储then中成功的回调函数
  this.onResolvedCallbacks = []
  // 存储then中失败的回调函数
  this.onRejectedCallbacks = []


  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'resolved'
      self.onResolvedCallbacks.forEach(fn => fn())
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
      self.onRejectedCallbacks.forEach(fn => fn())
    }
  }
  try {
    exector(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

promise.prototype.then = function(onFulfilled, onRejected) {
  // 获取下this
  let self = this;
  if (this.status === 'resolved') {
    onFulfulled(self.value);
  }

  if (this.status === 'rejected') {
    onRejected(self.reason);
  }

  // 如果异步执行则位pending状态
  if(this.status === 'pending') {
    // 保存回调函数
    this.onResolvedCallbacks.push(() => {
      onFulfilled(self.value);
    })

    this.onRejectedCallbacks.push(() => {
      onRejected(self.reason)
    });
  }
}

let ajax = new promise((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() > 0.5) {
      resolve('成功')
    } else {
      reject('失败')
    }
  }, 1000)
})

ajax.then((data) => {
  console.log('success' + data)
}, (err) => {
  console.log('err' + err)
})
