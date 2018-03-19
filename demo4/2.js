/*
 * @author: angelasu
 * @date: 2018/03/19
 * @description: 观察者模式
 */


// 创建一个观察者

var Observer = (function() {
  var _message = {}
  return {
    // type: 消息类型 fn: 相应的处理动作
    regist(type, fn) {
      if (typeof _message[type] === 'undefined') {
        _message[type] = [fn]
      } else {
        _message[type].push(fn)
      }
    },
    // type: 消息类型 args: 动作执行时需要传递的参数
    fire(type, args) {
      if (!_message[type])
        return
      var events = {
        type: type,
        args: args || []
      },
      i = 0,
      len = _message[type].length
      for (; i < len; i++) {
        // 依次执行注册的消息对应的动作序列
        _message[type][i].call(this, events)
      }
    },
    // type: 消息类型 fn: 执行的某一动作
    remove(type, fn) {
      if (_message[type] instanceof Array) {
        var i = _message[type].length - 1
        for (; i >= 0; i) {
          _message[type[i] === fn && _message[type].splice(i, 1)]
        }
      }
    }
  }
})()


Observer.regist('test', function(e) {
  console.log(e.type, e.args.msg, '==============e')
})

Observer.fire('test', {msg: '测试～～～'})
