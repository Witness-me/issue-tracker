import Vue from "vue";
import Router from "vue-router";
import AllIssues from "@/components/AllIssues.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "AllIssues",
      component: AllIssues,
    },
  ],
});
