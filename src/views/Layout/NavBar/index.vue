<template>
  <div class="nav iconfont row-center">
    <div class="more">&#xe667;</div>
    <div class="name">KeCat壁纸</div>
    <div class="search">&#xe60e;</div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.nav {
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  gap: 15px;
  box-sizing: border-box;
  padding: 15px;

  .more {
    font-size: 22px;
    font-weight: lighter;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
  }

  .search {
    font-size: 20px;
    position: absolute;
    right: 20px;
    font-weight: bold;
  }
}
</style>
