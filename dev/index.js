import Vue from 'vue'
import App from './App'
import SvgLoading from '../src/index'

Vue.use(SvgLoading)

new Vue({
  el: '#app',
  render: h => h(App)
})
