<template>
  <div class="navbar-wrapper">
    <img class="logo" src="../assets/bug.png" />
    <!-- Icon above made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
    <button class="navbar-button" @click="switchTab('Dashboard')">
      Dashboard
    </button>
    <button class="navbar-button" @click="switchTab('AllIssues')">
      All issues
    </button>
    <div class="navbar-pannel">
      <router-link to="/server">
        <button class="navbar-button">View server data</button>
      </router-link>
    </div>
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

<style>
.navbar-wrapper {
  height: 39px;
  background: #2c365e;
  /* old color 4d4ee3 */
  display: flex;
  border-bottom: 1px solid #303030;
}
.logo {
  height: 30px;
  margin: 5px 10px;
  transform: rotate(30deg);
}
.navbar-button {
  height: 39px;
  background: inherit;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
  font-weight: 400;
  border: 0;
  color: #f1f3f8;
}
.navbar-button:hover {
  background: #6b6be0;
}
.navbar-pannel {
  background: #2c365e;
  flex-grow: 100;
  display: flex;
  flex-direction: row-reverse;
}
</style>
