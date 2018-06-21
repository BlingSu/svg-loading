/**
 * svg-loading
 */
import Loading from './SvgLoading.vue'

const SvgLoading = {
  Loading,
  install: function(Vue) {
    Vue.component(Loading.name, Loading)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SvgLoading)
}

export default SvgLoading
