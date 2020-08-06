<template>
  <div class="container">
    <h1>All our issues</h1>
    <!-- issue here -->
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="issues-container">
      <div
        class="issue"
        v-for="(issue, index) in issues"
        v-bind:item="issue"
        v-bind:index="index"
        v-bind:key="issue._id"
      >
        {{
          `${issue.createdAt.getDate()}/
        ${issue.createdAt.getMonth() + 1}/
        ${issue.createdAt.getFullYear()}`
        }}
        <p class="title">{{ issue.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IssueService from "../IssueService";
export default {
  name: "AllIssues",
  data() {
    return {
      issues: [],
      error: "",
      text: ""
    };
  },
  async created() {
    // method runs authomatically when component is created
    try {
      // make request to backend through the issue service with axios
      this.issues = await IssueService.getIssues();
      console.log("issues " + this.issues);
    } catch (err) {
      this.error = err.message;
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

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
