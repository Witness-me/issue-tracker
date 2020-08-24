<template>
  <div class="container">
    <!-- server data link -->
    <router-link to="/server" class="router-link">
      <button>View server data</button>
    </router-link>
    <button class="dashboard" v-on:click="switchTab('Dashboard')">
      Dashboard
    </button>
    <button class="all-issues" v-on:click="switchTab('AllIssues')">
      All issues
    </button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    switchTab(tabName) {
      this.$emit("switchTab", tabName);
    },
  },
};
</script>

<style scoped>
.router-link {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
