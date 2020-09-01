<template>
  <div class="modal-background" @click="closePopup">
    <div class="modal-popup" @click.stop>
      <h1>Comment</h1>
      <div class="comment">{{ comment }}</div>
      <button @click="closePopup">Cancel</button>
    </div>
  </div>
</template>

<script>
import * as api from "@/utils/api";
export default {
  name: "Comments",
  methods: {
    async closePopup() {
      this.$emit("closePopup");
    }
  },
  props: ["comment"]
};
</script>