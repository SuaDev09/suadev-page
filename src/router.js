import Vue from "vue";
import VueRouter from "vue-router";

//import Home from "./views/Home.vue";
import About from "./views/about.vue";

Vue.use(VueRouter);

const routes = [
  //{ path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHasHistory(),
  routes,
});

export default router;
