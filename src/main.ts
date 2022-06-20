import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";

Vue.config.productionTip = false;

// 全局Nav组件
Vue.component("Nav", Nav);

new Vue({
  router, // 路由
  store,
  render: (h) => h(App),
}).$mount("#app");
