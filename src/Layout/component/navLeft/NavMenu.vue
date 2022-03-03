<template>
  <div>
    <template v-for="rou in menuList">
      <el-submenu
        v-if="rou.children && rou.children.length > 0"
        :index="rou.name"
        :key="rou.name"
      >
        <template slot="title">
          <i :class="rou.meta.icon"></i>
          <span>{{ rou.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <nav-menu :menuList="rou.children" />
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item
        v-else
        :index="rou.name"
        :key="rou.name"
        @click="handlerRouterPath(rou)"
      >
        <i :class="rou.meta.icon"></i>
        <span slot="title">{{ rou.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { RouteConfigPlus } from "@/types/route";

@Component
export default class NavMenu extends Vue {
  @Prop() public menuList!: Array<RouteConfigPlus>;

  /**
   * @method 菜单路由跳转
   * @param rou 路由配置里面router数据
   * @private
   */
  private handlerRouterPath(rou: RouteConfigPlus) {
    this.$router.push({ name: rou.name });
  }
}
</script>

<style>
/** el-menu 中由于本身标签内部希望是 el-menu-item 或者 el-submenu,由于业务需求需要嵌入div，所以手动隐藏其文字显示 */
/** 隐藏文字 */
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/** 隐藏icon角标 */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
/** 当隐藏的时候有子菜单的时候去除头部多余的部分 */
.el-menu-item-group__title {
  padding: 0 !important;
}
</style>
