<template>
  <div id="app">
    <router-view />
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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #f1f3f8;
  color: #302e38;
  color: #2c3e50;
  color: #303030;
  margin: 0;
  height: 100%;
  min-height: 100%;
  min-height: 100vh;
  min-width: 750px;
}
div,
p,
h1,
a {
  margin: 0;
}
</style>
