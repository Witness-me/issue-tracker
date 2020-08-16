<template>
  <div class="container">
    <h1>Add issue</h1>
    <!-- input form -->
    <div class="create-issue">
      <!-- title -->
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" placeholder="Insert issue's title..." />
      <br />
      <!-- status -->
      <input type="radio" id="to-do" value="To do" v-model="status" />
      <label for="to-do">To do</label>

      <input type="radio" id="in-progress" value="In progress" v-model="status" />
      <label for="in-progress">In progress</label>

      <input type="radio" id="done" value="Done" v-model="status" />
      <label for="done">Done</label>
      <br />
      <!-- comments -->
      <label for="comments">Comments</label>
      <textarea type="text" id="comments" v-model="comments" placeholder="Insert your comments..." />
      <br />
      <!-- prioriy -->
      <label for="priority">Priority</label>
      <select v-model="priority" id="priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <br />
      <!-- button -->
      <button v-on:click="createIssue">Post!</button>
    </div>
  </div>
</template>

<script>
import * as api from "@/utils/api";
export default {
  name: "AddIssue",
  data() {
    return {
      title: "",
      status: "To do",
      comments: "",
      priority: "Medium"
    };
  },
  methods: {
    async createIssue() {
      await api.addIssue(this.title, this.status, this.comments, this.priority);
      this.title = this.comments = "";
      this.status = "To do";
      this.priority = "Medium";
      await this.$store.dispatch("getAllIssues");
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
