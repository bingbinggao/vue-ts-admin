import { RouteConfig } from "vue-router";

/**
 * 示例
 * {
 *     path: "/xxx",
 *     name: "xxx",
 *     meta: {
 *         icon: "xxxxxx",
 *         name: "xx"
 *     },
 *     component: xxx
 * }
 */

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
    path: "/documentation",
    name: "documentation",
    meta: {
      icon: "el-icon-notebook-2",
      name: "文档",
    },
    component: () => import("@/views/documentation/index.vue"),
  },
  {
    path: "/table",
    name: "Table",
    meta: {
      icon: "el-icon-s-home",
      name: "表格",
    },
    component: () => import("@/views/table/index.vue"),
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      icon: "el-icon-s-home",
      name: "错误页",
    },
    component: () => import("@/views/error/index.vue"),
    children: [
      {
        path: "/401",
        name: "401",
        meta: {
          icon: "",
          name: "401",
        },
        component: () => import("@/views/error/401.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: {
          icon: "",
          name: "404",
        },
        component: () => import("@/views/error/404.vue"),
      },
    ],
  },
];

export default DYNAMIC_ROUTES;
