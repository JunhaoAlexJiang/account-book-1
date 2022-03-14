import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/MainNav.vue";

Vue.config.productionTip = false;
Vue.component("MainNav", Nav);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
