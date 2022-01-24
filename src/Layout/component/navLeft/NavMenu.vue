<template>
  <div>
    <div v-for="rou in menuList" :key="rou.name">
      <div v-if="rou.children && rou.children.length > 0">
        <el-submenu :index="rou.name" :key="rou.name">
          <template slot="title">
            <i :class="rou.meta.icon"></i>
            <span>{{ rou.meta.name }}</span>
          </template>
          <el-menu-item-group>
            <nav-menu :menuList="rou.children" />
          </el-menu-item-group>
        </el-submenu>
      </div>
      <div v-else>
        <el-menu-item :index="rou.name">
          <i :class="rou.meta.icon"></i>
          <span slot="title">{{ rou.meta.name }}</span>
        </el-menu-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";

@Component
export default class NavMenu extends Vue {
  @Prop() public menuList!: Array<RouteConfig>;
}
</script>

<style scoped></style>
