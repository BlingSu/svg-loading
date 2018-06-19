<template>
  <div id="app">
    <svg-loading v-show="loading"></svg-loading>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false
    }
  },

  created() {
    this.loading = false
    setTimeout(() => {
      this.loading = true
    }, 3000)
  }
} 
</script>