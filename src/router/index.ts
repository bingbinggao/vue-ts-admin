import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import dynamicRoutes from "./dynamicRoutes";
import Layout from "@/Layout/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [...dynamicRoutes],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
