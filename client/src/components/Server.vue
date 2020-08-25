<template>
  <div class="about">
    <header class="navbar-pannel">
      <router-link to="/">
        <button class="navbar-button">Back to Homepage</button>
      </router-link>
    </header>
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
