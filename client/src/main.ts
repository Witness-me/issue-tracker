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
    watchIssues(state) {
      console.log(state.issues);
      // state.issues = await api.getIssues();
    },
  },
  actions: {
    async getAllIssues() {
      this.state.issues = await api.getIssues();
    },
    async deleteIssue(id: any) {
      await api.deleteIssue(id);
      await this.dispatch("getAllIssues");
    },
  },
  getters: {},
});

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
