<template>
  <div class="container">
    <div><img alt="Vue logo" src="../assets/logo.png" /></div>
    <button class="dashboard" v-on:click="switchTab('Dashboard')">
      Dashboard
    </button>
    <button class="all-issues" v-on:click="switchTab('AllIssues')">
      All issues
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["tabs", "currentTab"],
  methods: {
    switchTab(tabName) {
      this.$emit("switchTab", tabName);
    },
  },
};
</script>

<style scoped></style>
