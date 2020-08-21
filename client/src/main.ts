import Vue from "vue";
import store from "@/store";
import App from "./App.vue";

Vue.config.productionTip = false;

// export const bus = new Vue();

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
