import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import { mixin } from "@/mixin";

Vue.config.productionTip = false;

// 全局Nav组件
Vue.component("Nav", Nav);
// 全局Layout组件
Vue.component("Layout", Layout);
// 全局icon组件
Vue.component("Icon", Icon);

// 全局使用mixin
Vue.mixin(mixin);
new Vue({
  router, // 路由
  store,
  render: (h) => h(App),
}).$mount("#app");
