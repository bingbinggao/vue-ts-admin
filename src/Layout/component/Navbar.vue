<template>
  <div class="navbar">
    <div style="flex: 1; display: flex">
      <div class="navbar-icon" @click="handlerNavCollapse">
        <i v-if="state.isSidebarNavCollapse" class="el-icon-s-unfold" />
        <i v-else class="el-icon-s-fold" />
      </div>
    </div>
    <div style="display: flex; padding-right: 20px; align-items: center">
      <el-input size="small" suffix-icon="el-icon-search" />
      <span class="gbb-interval" />
      <span>gaobingbing</span>
      <span class="gbb-interval" />
      <el-dropdown size="small">
        <span class="el-dropdown-link">
          <img
            style="
              width: 35px;
              height: 35px;
              border-radius: 10px;
              cursor: pointer;
            "
            src="@/assets/me.jpg"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
  height: 49px;
  border-bottom: 1px solid #efefef;
  display: flex;
  .navbar-icon {
    height: 100%;
    width: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .navbar-icon:hover {
    background-color: #efefef;
  }
}
</style>
