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

    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "./Footer.vue";
export default {
  name: "Server",
  computed: mapGetters(["allIssues"]),
  components: {
    Footer
  }
};
</script>

<style scoped>
.server-wrapper {
  text-align: center;
}
</style>
