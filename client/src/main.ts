import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import * as api from "@/utils/api";
import ApiPlugin from "@/utils/api.plugin";

Vue.use(ApiPlugin);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    issues: [],
  },
  mutations: {
    // getAllIssues() {
    //   return this.$getIssues();
    // },
    // logMessage() {
    //   this.$log;
    // },
  },
  actions: {
    async getAllIssues() {
      this.state.issues = await api.getIssues();
      //this.$getIssues();
    },
  },
  getters: {},
});

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
