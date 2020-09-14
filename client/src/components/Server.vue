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
      <div>
        <h1 class="title">Server information</h1>
        <div
          class="server-data"
          v-for="issue in allIssues"
          v-bind:key="issue._id"
        >
          {{ issue }}
        </div>
      </div>
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
  },
};
</script>

<style scoped>
.server-wrapper {
  /* text-align: center; */
}
.main {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 15px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 10px;
}
.server-data {
  font-size: 12px;
  margin-bottom: 7px;
}
</style>
