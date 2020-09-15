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
        <h1 class="modal-header">Edit issue</h1>
        <!-- input form -->
        <div class="input-form">
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
              <input
                type="radio"
                id="done"
                value="Done"
                v-model="issue.status"
              />
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
          <button class="input-submit-button" @click="editIssue">Edit</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
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
    // Animations
    enter(el) {
      enter(el);
    },
    leave(el, done) {
      leave(el, done);
    },
  },

  props: ["issue"],
};
</script>
