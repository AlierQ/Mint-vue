import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Detail from "@/views/Detail.vue";
import Add from "@/views/Add.vue";
import Statistics from "@/views/Statistics.vue";
import Label from "@/views/Label.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 默认路径
  { path: "/", redirect: "/detail" },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
  {
    path: "/label",
    component: Label,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
