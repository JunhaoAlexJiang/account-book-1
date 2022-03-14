import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Money from "@/views/MoneyView.vue";
import Label from "@/views/LabelView.vue";
import Statistics from "@/views/StatisticsView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/money",
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/label",
    component: Label,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
