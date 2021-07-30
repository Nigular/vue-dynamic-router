import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//自定义按钮权限指令
import permissionDirective from "@/directive/permission";
Vue.directive("permission", permissionDirective);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
