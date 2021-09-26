<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style>
</style>

<script>
import MainLayout from './layouts/MainLayout.vue'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout) + '-layout'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>
body {
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
}
</style>
