import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ServerResponce from "../views/ServerResponce.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/server",
    name: "ServerResponce",
    component: ServerResponce,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
