import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const About = { template: "<div> About </div>" };

const routes = [{ path: "/", component: About }];

//Instanciando las rutas
const history = createWebHistory();
const router = createRouter({
  history: history,
  routes,
});

createApp(App).use(router).mount("#app");
