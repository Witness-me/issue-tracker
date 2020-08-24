import Vue from "vue";
import store from "@/store";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// export const bus = new Vue();

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");
