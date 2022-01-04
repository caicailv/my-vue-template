const camelizeRE = /-(\w)/g
const camelize = (str) => {
  console.log('str->', str)
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

// 实现缓存函数
function cached(fn) {
  const cache = Object.create(null)
  return function (str) {
    if (cache[str]) return cache[str]
    return (cache[str] = fn(str))
  }
}

const camelizeCached = cached(camelize)
 console.log(camelizeCached('str'))
 console.log(camelizeCached('str'))
 console.log(camelizeCached('str'))