<template>
  <transition v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal-background" @click="closePopup()">
      <div class="modal-popup" @click.stop>
        <img
          class="close-modal-icon"
          src="../assets/img/close.png"
          alt="Close"
          @click="closePopup"
        />
        <h1 class="modal-header">Delete issue</h1>
        <!-- input form -->
        <div class="modal-content">
          <p>Are you sure that you want to permanently delete the issue?</p>
          <p>This cannot be undone.</p>
          <!-- button -->
        </div>
        <button class="input-submit-button" @click="deleteIssue">Delete</button>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
export default {
  name: "DeleteIssue",
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    async deleteIssue() {
      await api.deleteIssue(this.currentIssue._id);
      await this.$store.dispatch("getAllIssues");
      this.closePopup();
    },
    // Animations
    enter(el) {
      enter(el);
    },
    leave(el, done) {
      leave(el, done);
    },
  },
  props: ["currentIssue"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-popup {
  height: 250px;
  width: 500px;
}
.modal-content {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 50px;
}
.modal-content p {
  padding: 3px 0;
}
</style>
