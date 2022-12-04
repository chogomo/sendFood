<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  //測試api接口
  // import {reqFoodCategorys} from './api'

  export default {
    name: 'App',
    mounted(){
      //測試api接口
      // const result = reqFoodCategorys()
      // console.log(result)
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo'])
    }, 
    components: {
      FooterGuide
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
