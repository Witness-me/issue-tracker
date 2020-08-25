<template>
  <div class="navbar-wrapper">
    <img class="logo" src="../assets/bug.png" />
    <!-- Icon above made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
    <button class="navbar-button" v-on:click="switchTab('Dashboard')">
      Dashboard
    </button>
    <button class="navbar-button" v-on:click="switchTab('AllIssues')">
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
  height: 40px;
  background: #4d4ee3;
  display: flex;
}
.logo {
  height: 32px;
  margin: auto 10px;
  transform: rotate(30deg);
}
.navbar-button {
  height: 40px;
  background: inherit;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  font-weight: 400;
  border: 0;
}
.navbar-button:hover {
  /* background: rgb(98, 98, 231); */
  background: #6b6be0;
}
.navbar-pannel {
  background: #4d4ee3;
  flex-grow: 100;
  display: flex;
  flex-direction: row-reverse;
}
</style>
