<template>
  <div class="navbar">
    <div style="flex: 1">
      <div class="navbar-icon" @click="handlerNavCollapse">
        <i v-if="state.isSidebarNavCollapse" class="el-icon-s-unfold" />
        <i v-else class="el-icon-s-fold" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  private state = this.$store.state;

  private handlerNavCollapse(): void {
    this.$store.commit("TOGGLE_NAV_COLLAPSE");
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 50px;
  background-color: rgb(24, 26, 26);
  display: flex;
  .navbar-icon {
    color: #ffffff;
    height: 100%;
    width: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .navbar-icon:hover {
    background-color: rosybrown;
  }
}
</style>
