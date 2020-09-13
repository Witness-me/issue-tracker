import Vue from "vue";
import store from "@/store";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");
