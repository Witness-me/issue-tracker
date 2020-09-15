<template>
  <transition v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal-background" @click="closePopup">
      <div class="modal-popup" @click.stop>
        <img
          class="close-modal-icon"
          src="../assets/img/close.png"
          alt="Close"
          @click="closePopup"
        />
        <h1 class="modal-header">Add issue</h1>
        <!-- error -->
        <div class="modal-error" v-if="error">
          <p>Issue's title is required!</p>
        </div>
        <!-- title -->
        <textarea
          type="text"
          class="input-title modal-inputs"
          v-model="issue.title"
          placeholder="Enter your issue here..."
          maxlength="200"
        />
        <!-- status -->
        <div class="input-status">
          <div>
            <input
              type="radio"
              id="to-do"
              value="To do"
              v-model="issue.status"
            />
            <label for="to-do">To do</label>
          </div>
          <div>
            <input
              type="radio"
              id="in-progress"
              value="In progress"
              v-model="issue.status"
            />
            <label for="in-progress">In progress</label>
          </div>
          <div>
            <input type="radio" id="done" value="Done" v-model="issue.status" />
            <label for="done">Done</label>
          </div>
        </div>
        <!-- comments -->
        <div class="input-form-container">
          <label for="input-comments">Comments:</label>
          <textarea
            type="text"
            class="input-comments modal-inputs"
            v-model="issue.comments"
            placeholder="Enter your comments..."
            maxlength="600"
          />
        </div>
        <!-- prioriy -->
        <div class="input-form-container input-priority-container">
          <label for="input-priority">Priority:</label>
          <select v-model="issue.priority" class="input-priority">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <!-- buttons -->
        <button class="input-submit-button" @click="addIssue">Add</button>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
export default {
  name: "AddIssue",
  data() {
    return {
      issue: {
        title: "",
        status: "To do",
        comments: "",
        priority: "Medium",
      },
      error: false,
    };
  },
  props: ["newIssueStatus"],
  methods: {
    async addIssue() {
      if (!this.issue.title) this.error = true;
      else {
        await api.addIssue(this.issue);
        await this.$store.dispatch("getAllIssues");
        this.closePopup();
      }
    },
    closePopup() {
      this.$emit("closePopup");
    },
    // Animations
    enter(el) {
      enter(el);
    },
    leave(el, done) {
      leave(el, done);
    },
  },
  mounted() {
    this.issue.status = this.newIssueStatus || "To do";
  },
};
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-popup {
  position: fixed;
  width: 600px;
  height: 360px;
  background: #f2f3f7;
  border: 2px #303030 solid;
  z-index: 15;
  text-align: center;
  border-radius: 4px;
}
.close-modal-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 23px;
  width: 23px;
}
.close-modal-icon:hover {
  top: 9px;
  right: 9px;
  height: 25px;
  width: 25px;
  cursor: pointer;
}
.modal-header {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 10px;
}
.modal-error {
  color: #fd4646;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}
.modal-inputs {
  box-sizing: border-box;
  background: #cdd9f5;
  color: #303030;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  margin: 8px;
  border-radius: 3px;
  resize: none;
  font-family: "Roboto", sans-serif;
  border: 1px solid #2c365e;
}
.input-title {
  width: 530px;
  height: 65px;
}
.input-status {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 5px;
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
  width: 430px;
  height: 80px;
}
.input-priority-container {
  margin-top: 5px;
  margin-bottom: 20px;
}
.input-priority {
  margin: 0 10px;
  background: #cdd9f5;
  border-radius: 1px;
}
.input-submit-button {
  width: 100px;
  height: 30px;
  border: 2px solid #272f52;
  color: #f1f3f8;
  background: #384579;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  height: 30px;
  line-height: 20px;
  width: 100px;
  margin: 0;
}
.input-submit-button:hover {
  background: #2c365e;
  color: #f1f3f8;
  cursor: pointer;
}
</style>
