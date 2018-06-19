<template>
  <div id="app">
    <Vue2Loading v-show="loading"></Vue2Loading>
  </div>
</template>

<script>

export default {
  components: {
    // Vue2Loading
  },

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