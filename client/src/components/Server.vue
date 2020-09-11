<template>
  <div class="server-wrapper">
    <div class="navbar-wrapper">
      <router-link to="/home">
        <img class="logo" src="../assets/img/bug.png" />
      </router-link>

      <div class="navbar-pannel">
        <router-link to="/home">
          <button class="navbar-button">Back to Homepage</button>
        </router-link>
      </div>
    </div>

    <div class="main">
      <h1>Server information</h1>
      <div v-for="issue in allIssues" v-bind:key="issue._id">{{ issue }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Server",

  computed: mapGetters(["allIssues"]),
  methods: mapActions(["getAllIssues"]),
  async mounted() {
    this.getAllIssues();
  }
};
</script>

<style scoped>
.server-wrapper {
  text-align: center;
}
</style>
