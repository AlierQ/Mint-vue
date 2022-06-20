import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Detail from "@/views/Detail.vue";
import Add from "@/views/Add.vue";
import Statistics from "@/views/Statistics.vue";
import Label from "@/views/Label.vue";
import NotFound from "@/views/NotFound.vue";

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
  // 前面的都没有匹配到才会匹配下面的
  {
    // 除了上面之外的所有路径都是404
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
