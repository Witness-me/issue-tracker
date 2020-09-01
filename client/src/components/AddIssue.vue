<template>
  <div class="modal-background" @click="closePopup">
    <div class="modal-popup" @click.stop>
      <h1 class="modal-header">Add issue</h1>
      <!-- input form -->
      <div class="input-form">
        <!-- title -->
        <!-- <label for="title"></label> -->
        <textarea
          type="text"
          class="input-title modal-inputs"
          v-model="issue.title"
          placeholder="Enter your issue here..."
        />
        <br />
        <!-- status -->
        <div class="input-status">
          <input type="radio" id="to-do" value="To do" v-model="issue.status" />
          <label for="to-do">To do</label>
        </div>
        <div class="input-status">
          <input type="radio" id="in-progress" value="In progress" v-model="issue.status" />
          <label for="in-progress">In progress</label>
        </div>
        <div class="input-status">
          <input type="radio" id="done" value="Done" v-model="issue.status" />
          <label for="done">Done</label>
        </div>
        <br />
        <!-- comments -->
        <div class="input-form-container">
          <label for="input-comments">Comments:</label>
          <textarea
            type="text"
            class="input-comments modal-inputs"
            v-model="issue.comments"
            placeholder="Enter your comments..."
          />
        </div>
        <br />
        <!-- prioriy -->
        <div class="input-form-container">
          <label for="input-priority">Priority:</label>
          <select v-model="issue.priority" class="input-priority">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <br />
        <!-- buttons -->
        <button class="input-submit-button" @click="addIssue">Add</button>
        <!-- <button @click="closePopup">Cancel</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "@/utils/api";
export default {
  name: "AddIssue",
  data() {
    return {
      issue: {
        title: "",
        status: "To do",
        comments: "",
        priority: "Medium"
      }
    };
  },
  props: ["newIssueStatus"],
  methods: {
    async addIssue() {
      await api.addIssue(this.issue);
      await this.$store.dispatch("getAllIssues");
      this.closePopup();
    },
    closePopup() {
      this.$emit("closePopup");
    }
  },
  mounted() {
    this.issue.status = this.newIssueStatus || "To do";
  }
};
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-popup {
  position: fixed;
  width: 600px;
  height: 350px;
  background: #f1f3f8;
  border: 1px #303030 solid;
  z-index: 15;
  text-align: center;
}
.modal-header {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 10px;
}
.input-form {
  /* background: burlywood; */
}
.modal-inputs {
  box-sizing: border-box;
  background: #cdd9f5;
  color: #303030;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
}
.input-title {
  width: 530px;
  height: 65px;
  margin: 10px;
  margin-bottom: 5px;
  border: 1px solid #2c365e;
  border-radius: 3px;
}
.input-status {
  display: inline;
  box-sizing: border-box;
  margin: 5px 3px;
  font-size: 14px;
  font-weight: 500;
}
.input-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
}
.input-comments {
  width: 400px;
  height: 70px;
  margin: 5px;
  border: 1px solid #2c365e;
  border-radius: 3px;
}
.input-priority {
  margin: 0 10px;
  background: #cdd9f5;
  border-radius: 1px;
}
.input-submit-button {
  width: 100px;
  height: 30px;
  border: 2px solid #2c365e;
  /* border: 0; */
  color: #2c365e;
  background: #cdd9f5;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  height: 30px;
  line-height: 20px;
  width: 100px;
  /* border-radius: 10px; */
}
.input-submit-button:hover {
  background: #2c365e;
  color: #f1f3f8;
  cursor: pointer;
}
</style>
