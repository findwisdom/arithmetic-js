// Promise状态一旦确定就不会更改，所以同一个Promise处理多次错误是没意义的。

let Ajax = function(option) {
  console.log('ajax')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //reject('some error ')
      resolve('成功')
    }, 1000)
  })
}

function runAjax(option, retry = 3) {
  let p = Ajax(option);
  if (retry > 0) {
    retry--;
    console.log('还有' + retry + '次，则抛出错误')
    return new Promise((resolve, reject) => {
      console.log(resolve.toString())
      p.then((e)=>resolve(e)).catch(() => {
        resolve(runAjax(option, retry))
      })
    })
  }
  return p;
}

runAjax({ hello: 'word' }).then(function (res) {
  console.log(res)
}).catch((err) => {
  console.log('run error', err)
})
