<template>
  <div>
    <Navbar
      :tabs="tabs"
      :currentTab="currentTab"
      v-on:switchTab="switchTab($event)"
    />
    <component v-bind:is="currentTab"></component>
    <!-- <Dashboard v-bind:is="currentTabComponent" />
    <AllIssues v-bind:is="currentTabComponent" />-->
  </div>
</template>

<script>
import AllIssues from "../components/AllIssues.vue";
import Dashboard from "../components/Dashboard.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  data() {
    return {
      currentTab: "Dashboard",
      tabs: ["Dashboard", "AllIssues"],
    };
  },
  computed: {},
  methods: {
    switchTab(newTab) {
      this.currentTab = newTab;
    },
  },
  components: {
    Navbar,
    Dashboard,
    AllIssues,
  },
};
</script>
