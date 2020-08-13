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
    updateIssues(state, issues) {
      state.issues = issues;
    },
  },
  actions: {
    async getAllIssues(ctx) {
      //this.state.issues = await api.getIssues();
      const issues = await api.getIssues();
      ctx.commit("updateIssues", issues);
    },
    async deleteIssue(id: any) {
      await api.deleteIssue(id);
      await this.dispatch("getAllIssues");
    },
  },
  getters: {
    allIssues(state) {
      return state.issues;
    },
    issuesCount(state) {
      return state.issues.length;
    },
  },
});
