<template>
  <div id="app">
    <svg-loading
      :size="size"
      :color="color"
      :visible="loading"></svg-loading>
  </div>
</template>

<script>

export default {
  props: {
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#58b7ff'
    }
  },
  data() {
    return {
      loading: false
    }
  },

  created() {
    setTimeout(() => {
      this.loading = true
    }, 3000)
  }
}
</script>
