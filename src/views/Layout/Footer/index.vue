<template>
  <footer class="footer">
    <div
      v-for="tab in footerTabs"
      :key="tab.name"
      class="tab col-center row-center flex-col"
    >
      <div class="icon iconfont">{{ tab.icon }}</div>
      <div>{{ tab.name }}</div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { footerTabs } from "@/configs/footer.ts";
</script>

<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: rgba(34, 36, 50, 0.931);
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  .tab {
    width: 100%;
    height: 100%;

    .icon {
      font-weight: normal;
      font-size: 22px;
    }
  }
}
</style>
