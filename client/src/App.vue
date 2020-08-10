<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <AddIssue />
    <AllIssues />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AllIssues from "./components/AllIssues.vue";
import AddIssue from "./components/AddIssue.vue";

@Component({
  components: {
    AddIssue,
    AllIssues,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
