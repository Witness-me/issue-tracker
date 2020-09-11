import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/utils/api";
import ApiPlugin from "@/utils/api.plugin";
import { getUserId } from "@/utils/auth";

Vue.use(ApiPlugin);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: [],
    userId: "",
  },
  mutations: {
    updateIssues(state, issues) {
      state.issues = issues;
    },
    setUser(state) {
      state.userId = getUserId();
    },
  },
  actions: {
    async getAllIssues(ctx) {
      ctx.commit("setUser");
      // userId: this.state.userId
      const issues = await api.getIssues({
        userId: "auth0|5f591adfb9bd4c006ae44dfb",
      });
      ctx.commit("updateIssues", issues);
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
