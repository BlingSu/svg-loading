const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './test/index'),
  vendor: false,
  filename: {
    js: 'svg-loading.js'
  }
}