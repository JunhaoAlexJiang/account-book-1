import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav-1.vue";

Vue.config.productionTip = false;
Vue.component("NavName", Nav);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
