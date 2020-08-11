import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import * as api from "@/utils/api";

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    issues: [],
  },
  // mutations: {
  //   async getAllIssues() {
  //     this.issues = await api.getIssues();
  //     console.log(this.issues);
  //   },
  // },
  actions: {
    async getAllIssues() {
      this.state.issues = await api.getIssues();
    },
  },
  getters: {
    getterIssues: (state) => {
      return state.issues;
    },
  },
});

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
