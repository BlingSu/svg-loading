const path = require('path')

module.exports = {
  extractCSS: false,
  entry: path.resolve(__dirname, './dev/index.js'),
  vendor: false,
  filename: {
    js: 'svg-loading.js'
  }
}
