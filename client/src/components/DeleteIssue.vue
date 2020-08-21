<template>
  <div class="modal-background" @click="closePopup()">
    <div class="modal-popup" @click.stop>
      <h1>Delete issue</h1>
      <!-- input form -->
      <div class="delete-issue">
        <p>
          Are you sure that you want to permanently delete the
          issue?
        </p>
        <!-- button -->
        <button @click="deleteIssue()">
          Delete!
        </button>
        <button @click="closePopup()">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as api from "@/utils/api";
export default {
  name: "DeleteIssue",
  computed: mapGetters(["allIssues", "issuesCount"]),
  methods: {
    ...mapActions(["getAllIssues"]),
    closePopup() {
      this.$emit("closePopup");
    },
    async deleteIssue() {
      await api.deleteIssue(this.issueIdForDeleting);
      await this.getAllIssues();
      this.closePopup();
    },
  },
  props: ["issueIdForDeleting"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
