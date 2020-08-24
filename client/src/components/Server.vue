<template>
  <div class="about">
    <h1>Server information</h1>
    <div v-for="issue in allIssues" v-bind:key="issue._id">
      {{ issue }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Server",
  computed: mapGetters(["allIssues", "issuesCount"]),
};
</script>
