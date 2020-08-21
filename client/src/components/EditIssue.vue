<template>
  <div class="modal-background" @click="closePopup">
    <div class="modal-popup" @click.stop>
      <h1>Edit issue</h1>
      <!-- input form -->
      <div class="input-form">
        <!-- title -->
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model="issue.title"
          placeholder="Insert issue's title..."
        />
        <br />
        <!-- status -->
        <input type="radio" id="to-do" value="To do" v-model="issue.status" />
        <label for="to-do">To do</label>
        <input
          type="radio"
          id="in-progress"
          value="In progress"
          v-model="issue.status"
        />
        <label for="in-progress">In progress</label>
        <input type="radio" id="done" value="Done" v-model="issue.status" />
        <label for="done">Done</label>
        <br />
        <!-- comments -->
        <label for="comments">Comments</label>
        <textarea
          type="text"
          id="comments"
          v-model="issue.comments"
          placeholder="Insert your comments..."
        />
        <br />
        <!-- prioriy -->
        <label for="priority">Priority</label>
        <select v-model="issue.priority" id="priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <!-- buttons -->
        <button @click="editIssue">
          Edit!
        </button>
        <button @click="closePopup">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "@/utils/api";
export default {
  name: "EditIssue",
  methods: {
    async editIssue() {
      await api.editIssue(this.issue);
      await this.$store.dispatch("getAllIssues");
      this.closePopup();
    },
    async closePopup() {
      await this.$store.dispatch("getAllIssues");
      this.$emit("closePopup");
    },
  },

  props: ["issue"],
};
</script>
