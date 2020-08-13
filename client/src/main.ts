import Vue from "vue";
import store from "@/store";
import App from "./App.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
