import { RouteConfig } from "vue-router";
import { RouteConfigPlus } from "@/types/route";

/**
 * 示例
 * {
 *     path: "/xxx",
 *     name: "xxx",
 *     meta: {
 *         icon: "xxxxxx",
 *         title: "xx"
 *     },
 *     component: xxx
 * }
 */

const DYNAMIC_ROUTES: Array<RouteConfigPlus> = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      icon: "el-icon-s-home",
      title: "首页",
    },
    component: () => import("@/views/dashboard/index.vue"),
  },
  {
    path: "/documentation",
    name: "documentation",
    meta: {
      icon: "el-icon-notebook-2",
      title: "文档",
    },
    component: () => import("@/views/documentation/index.vue"),
  },
  {
    path: "/table",
    name: "Table",
    meta: {
      icon: "el-icon-s-home",
      title: "表格",
    },
    component: () => import("@/views/table/index.vue"),
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      icon: "el-icon-s-home",
      title: "错误页",
    },
    component: () => import("@/views/error/index.vue"),
    children: [
      {
        path: "/401",
        name: "401",
        meta: {
          icon: "",
          title: "401",
        },
        component: () => import("@/views/error/401.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: {
          icon: "",
          title: "404",
        },
        component: () => import("@/views/error/404.vue"),
      },
    ],
  },
];

export default DYNAMIC_ROUTES;
