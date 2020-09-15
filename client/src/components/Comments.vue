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
        <h1 class="modal-header">Comments</h1>
        <div class="modal-content">
          <p>{{ comment }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
export default {
  name: "Comments",
  methods: {
    async closePopup() {
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
  props: ["comment"],
};
</script>

<style scoped>
.modal-popup {
  height: 280px;
  width: 520px;
}
.modal-content {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  height: 200px;
  margin: 30px 10px;
}
</style>
