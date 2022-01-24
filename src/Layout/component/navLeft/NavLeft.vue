<template>
  <div class="app-left">
    <el-menu
      default-active="0"
      size="mini"
      class="el-menu-vertical-demo"
      background-color="#1f1f1f"
      text-color="#FFFFFF"
      :collapse="state.isSidebarNavCollapse"
    >
      <nav-menu :menuList="menuList" />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavMenu from "@/Layout/component/navLeft/NavMenu.vue";
import ROUTER_LIST from "@/router/dynamicRoutes";
import { RouteConfig } from "vue-router";

@Component({
  components: { NavMenu },
})
export default class NavLeft extends Vue {
  private state = this.$store.state;

  private menuList: Array<RouteConfig> = ROUTER_LIST;
}
</script>

<style lang="scss" scoped>
.app-left {
  height: 100vh;
  background-color: #1f1f1f;
}
</style>
<style lang="scss">
.app-left {
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu {
    border-right: none;
  }
}
</style>
