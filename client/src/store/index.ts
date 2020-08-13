import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/utils/api";
import ApiPlugin from "@/utils/api.plugin";

Vue.use(ApiPlugin);

Vue.use(Vuex);

export default new Vuex.Store({
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
