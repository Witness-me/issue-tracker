<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./views/Home.vue";

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style>
html,
body {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #302e38;
  text-align: center;
  color: #2c3e50;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
