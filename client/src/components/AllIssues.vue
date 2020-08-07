<template>
  <div class="container">
    <h1>All our issues</h1>
    <!-- input form -->
    <div class="create-issue">
      <label for="create-title">Title</label>
      <input type="text" id="create-title" v-model="title" placeholder="Insert issue's title..." />
      <label for="create-comments">Comments</label>
      <input
        type="text"
        id="create-comments"
        v-model="comments"
        placeholder="Insert your comments..."
      />
      <button v-on:click="createIssue">Post!</button>
    </div>
    <!-- issues go here -->
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
        `${issue.createdAt.getDate()} /
        ${issue.createdAt.getMonth() + 1} /
        ${issue.createdAt.getFullYear()}`
        }}
        <p class="title">{{ issue.title }}</p>
        <p class="comments">{{ issue.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IssueService from "../IssueService";
export default {
  name: "AllIssues",
  data() {
    return {
      issues: [],
      error: "",
      title: "",
      comments: ""
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
  },
  methods: {
    async createIssue() {
      await IssueService.addIssue(this.title, this.comments);
      this.issues = await IssueService.getIssues();
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

p.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
