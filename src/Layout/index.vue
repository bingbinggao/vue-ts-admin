<template>
  <div class="app-wrapper">
    <app-left />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/Layout/component/Navbar.vue";
import AppMain from "@/Layout/component/AppMain.vue";
import AppLeft from "@/Layout/component/navLeft/NavLeft.vue";
@Component({
  components: { AppLeft, AppMain, Navbar },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  .main-container {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(50, 50, 50);
  }
}
</style>
