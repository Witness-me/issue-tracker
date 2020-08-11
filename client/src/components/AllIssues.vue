<template>
  <div class="container">
    <h1>All our issues</h1>
    <!-- issues go here -->
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="issues-container">
      <button v-on:click="refreshIssues()">Refresh</button>
      <div
        class="issue"
        v-for="(issue, index) in this.$store.state.issues"
        v-bind:key="issue._id"
        v-bind:issue="issue"
        v-bind:index="index"
      >
        {{ getStringFromDate(issue.createdAt) }}
        <p class="index">{{ `Issue #${index + 1}` }}</p>
        <p class="title">{{ issue.title }}</p>
        <p class="status">Status: {{ issue.status }}</p>
        <p class="comments">Comments: {{ issue.comments }}</p>
        <p class="priority">Priority: {{ issue.priority }}</p>
        <br />
        <button v-on:click="deleteIssue(issue._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "@/utils/api";
export default {
  name: "AllIssues",
  data() {
    return {
      error: "",
      //issues: [],
    };
  },
  async created() {
    // method runs authomatically when component is created
    try {
      // make request to backend through the issue service with axios
      //this.issues = await api.getIssues();
      await this.$store.dispatch("getAllIssues");
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async deleteIssue(id) {
      await api.deleteIssue(id);
      this.refreshIssues();
    },
    async refreshIssues() {
      await this.$store.dispatch("getAllIssues");
    },
    getStringFromDate(date) {
      return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getFullYear()}`;
    },
  },
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
