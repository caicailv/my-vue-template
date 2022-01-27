// 需求 ,实现对于存放于一个数组中的异步任务,进行迭代,完成迭代后再返回结果
let queue = [
  (next) => {
    setTimeout(() => {
      console.log('1')
      next()
    }, 200)
  },
  (next) => {
    setTimeout(next, 200)
  },
  (next) => {
    console.log('3')
    next()
  },
]

let runQueue = (queue, cb) => {
  const step = (index) => {
    if (index > queue.length - 1) return cb()
    queue[index](() => {
      step(index + 1)
    })
  }

  step(0)
}

runQueue(queue, () => {
  console.log('迭代完成')
})
