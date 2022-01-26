<template>
  <div class="app-main">
    <div style="padding: 10px">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: calc(100vh - 50px);
  overflow-x: hidden;
}
</style>
