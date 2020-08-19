<template>
  <div class="container">
    <h1>All issues</h1>
    <!-- issues go here -->
    <AddIssue />
    <hr />
    <div class="issues-container">
      <!-- <button v-on:click="refreshIssues()">Refresh</button> -->
      <p class="count">{{ `You have ${issuesCount} issues in total` }}</p>
      <div
        class="issue"
        v-for="(issue, index) in allIssues"
        v-bind:key="issue._id"
        v-bind:issue="issue"
        v-bind:index="index"
      >
        {{ getStringFromDate(issue.createdAt) }}
        <p class="index">{{ `Issue #${issuesCount - index}` }}</p>
        <p class="title">{{ issue.title }}</p>
        <p class="status">Status: {{ issue.status }}</p>
        <p class="comments" v-if="issue.comments">Comments: {{ issue.comments }}</p>
        <p class="priority">Priority: {{ issue.priority }}</p>
        <br />
        <button v-on:click="deleteIssue(issue._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
//import * as api from "@/utils/api";
import AddIssue from "./AddIssue.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AllIssues",
  computed: mapGetters(["allIssues", "issuesCount"]),
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),
    getStringFromDate(date) {
      return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getFullYear()}`;
    }
  },
  async mounted() {
    this.getAllIssues();
  },
  components: { AddIssue }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.issue {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
