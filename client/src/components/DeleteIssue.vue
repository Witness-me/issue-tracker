<template>
  <div class="container">
    <h1>Delete issue</h1>
    <!-- input form -->
    <div class="delete-issue">
      <p>Are you sure that you want to delete the issue?</p>
      <!-- button -->
      <button v-on:click="deleteIssue(issue._id)">Delete!</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as api from "@/utils/api";
export default {
  name: "DeleteIssue",
  computed: mapGetters(["allIssues", "issuesCount"]),
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),
    async deleteIssue1(id) {
      await api.deleteIssue(id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
