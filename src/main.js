const Svl = function (option) {
  let { el, data } = option
  el = document.querySelector(el)
  // 匹配数据绑定
  let html = el.outerHTML
  let reg = /\{\{.\}\}/g
}

new Svl({
  el: '#app',
  data: {
    msg: 'mysvl',
  },
})

var pendingText = '姓名：{{user.name}}，年龄：{{user.age}}'
function parseText(pendingText) {
  var collection = []
  var searchTxt = ''
  var targetTxt = ''
  var stringLength = 0,
    lastIndex = 0,
    curIndex = 0
  var reg = /\{\{(.+?)\}\}/g

  if (!reg.test(pendingText)) {
    throw new Error('未匹配')
  } else {
    reg.lastIndex = 0
    while ((tempR = reg.exec(pendingText))) {
      curIndex = reg.lastIndex
      searchTxt = tempR[0]
      stringLength = searchTxt.length
      collection.push(pendingText.slice(lastIndex, curIndex - stringLength))
      targetTxt = tempR[1]
      collection.push(targetTxt)
      lastIndex = curIndex
    }
  }
  console.log(collection)
}
parseText(pendingText)
