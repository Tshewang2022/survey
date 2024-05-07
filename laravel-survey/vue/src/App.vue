<script>
import HelloWorld from './components/HelloWorld.vue'
import{mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-white">
  <body class="h-full">
  ```
-->
<template>
<router-view></router-view>
</template>