<template>
  <div>
    <p>{{ tabs }}</p>
    <Navbar />
    <Dashboard />
    <AllIssues />
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
      tabs: ["Dashboard", "AllIssues"]
    };
  },
  components: {
    Navbar,
    Dashboard,
    AllIssues
  }
};
</script>
