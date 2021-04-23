<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <router-view></router-view>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'
export default {
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>

<style>

</style>
