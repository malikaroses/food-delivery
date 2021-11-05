<template>
  <div class="v-main-wrapper">
    <Header />
    <Dashboard />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
  import Header from './layouts/Header.vue'
  import Dashboard from './cart/Dashboard.vue'
  import Footer from './layouts/Footer1.vue'
  export default {
    name: 'v-main-wrapper',
    components: {
      Header,
      Dashboard,
      Footer
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<style>
  .v-main-wrapper {
    margin: 0 auto;
  }
</style>