<template>
  <div class="loading">
    <svg class="svg" :style="loadingSize" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" v-show="isVisible">
      <circle class="path" :style="loadingColor" fill="none" :stroke-width="stroke" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svg-loading',
  props: {
    size: {
      type: Number,
      default: 50
    },
    stroke: {
      type: Number,
      default: 3.5
    },
    color: {
      type: String,
      default: '#58b7ff'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    loadingSize() {
      const newSize = `${this.size}px`
      return {
        width: newSize,
        height: newSize
      }
    },
    loadingColor() {
      return {
        stroke: this.color
      }
    },
    isVisible() {
      return this.visible
    }
  }
}
</script>

<style src="./styles/loading.less" lang="less"></style>
