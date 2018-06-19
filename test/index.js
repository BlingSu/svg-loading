import Vue from 'vue'
import App from './App'
import Vue2Loading from '../src/index'

Vue.use(Vue2Loading)

new Vue({
  el: '#app',
  render: h => h(App)
})