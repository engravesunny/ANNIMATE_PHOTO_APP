<template>
  <div class="container">
    <NavBar></NavBar>
    <Footer></Footer>
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "./NavBar/index.vue";
import Footer from "./Footer/index.vue";
import SideBar from "./SideBar/index.vue";
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 55px;
  padding-top: 45px;
}
</style>
