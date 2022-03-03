import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import dynamicRoutes from "./dynamicRoutes";
import Layout from "@/Layout/index.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { RouteConfigPlus } from "@/types/route";

Vue.use(VueRouter);

const routes: RouteConfigPlus[] = [
  {
    path: "/",
    name: "dashboard",
    component: Layout,
    redirect: "/dashboard",
    meta: { title: "Dashboard" },
    children: [...dynamicRoutes],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to: Route, from: Route, next: any) => {
  NProgress.start();
  console.log(sessionStorage.getItem("username"));
  if (!window.sessionStorage.getItem("username") && to.path !== "/login") {
    return next("/login");
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
