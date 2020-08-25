<template>
  <div class="server-wrapper">
    <div class="navbar-wrapper">
      <router-link to="/">
        <img class="logo" src="../assets/bug.png" />
      </router-link>

      <div class="navbar-pannel">
        <router-link to="/">
          <button class="navbar-button">Back to Homepage</button>
        </router-link>
      </div>
    </div>
    <h1>Server information</h1>

    <div v-for="issue in allIssues" v-bind:key="issue._id">
      {{ issue }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Server",
  computed: mapGetters(["allIssues"]),
};
</script>

<style scoped>
.server-wrapper {
  text-align: center;
}
</style>
