const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './test/index'),
  vendor: false,
  filename: {
    js: 'vue2-loading.js'
  }
}