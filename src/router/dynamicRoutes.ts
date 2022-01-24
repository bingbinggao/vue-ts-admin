import { RouteConfig } from "vue-router";

const DYNAMIC_ROUTES: Array<RouteConfig> = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      icon: "el-icon-s-home",
      name: "首页",
    },
    component: () => import("@/views/dashboard/index.vue"),
  },
  {
    path: "/table",
    name: "Table",
    meta: {
      icon: "el-icon-notebook-2",
      name: "表格",
    },
    component: () => import("@/views/table/index.vue"),
    children: [
      {
        path: "/table",
        name: "Table1",
        meta: {
          icon: "",
          name: "表格1",
        },
        component: () => import("@/views/table/index.vue"),
      },
      {
        path: "/table",
        name: "Table12",
        meta: {
          icon: "",
          name: "表格12",
        },
        component: () => import("@/views/table/index.vue"),
      },
    ],
  },
  {
    path: "/adress",
    name: "adress",
    meta: {
      icon: "el-icon-s-home",
      name: "定位",
    },
    component: () => import("@/views/dashboard/index.vue"),
  },
  {
    path: "/ss",
    name: "ss",
    meta: {
      icon: "el-icon-s-home",
      name: "测试",
    },
    component: () => import("@/views/dashboard/index.vue"),
    children: [
      {
        path: "/ss11",
        name: "ss11",
        meta: {
          icon: "el-icon-s-home",
          name: "测试11",
        },
      },
    ],
  },
];

export default DYNAMIC_ROUTES;
