import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/MainNav.vue";
import NavLayout from "@/components/NavLayoutStyle.vue";
import "./icons";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.component("MainNav", Nav);
Vue.component("NavLayoutStyle", NavLayout);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
