<template>
  <div class="wrapper">
    <AddIssue
      v-if="addIssueIsVisible"
      v-on:closePopup="popupAddIssue($event)"
    />
    <Comments
      v-if="commentsAreVisible"
      :comment="comment"
      v-on:closePopup="openCommentsModal($event)"
    />
    <div class="table-container">
      <div class="table-header">
        <p class="counter">
          {{ `You currently have ${issuesCount} issues in total...` }}
        </p>
        <button @click="popupAddIssue()" class="add-issue-button">
          Submit issue
        </button>
      </div>
      <table class="table">
        <tr class="table-top-row">
          <th class="title">Issue</th>
          <th class="comments"></th>
          <th class="mark-as-done"></th>
          <th class="created-at">Created</th>
          <th class="status">Status</th>
          <th class="priority">Priority</th>
          <th class="delete">Delete</th>
        </tr>
        <tr v-for="issue in allIssues" v-bind:key="issue._id" class="table-row">
          <td @click="openEditModal(issue)" class="title">{{ issue.title }}</td>
          <td class="comments">
            <img
              v-if="issue.comments"
              class="icon"
              src="../assets/img/comments.png"
              alt="See comments"
              title="See comments"
              @click="openCommentsModal(issue.comments)"
            />
          </td>
          <td class="mark-as-done">
            <img
              v-if="issue.status !== 'Done'"
              class="icon"
              src="../assets/img/tick2.png"
              alt="Mark as done"
              title="Mark as done"
              @click="moveToDone(issue)"
            />
          </td>
          <td class="created-at">{{ getStringFromDate(issue.createdAt) }}</td>
          <td>
            <div
              class="status-div"
              :class="{
                'status-to-do': statusToDo(issue.status),
                'status-in-progress': statusInProgress(issue.status),
                'status-done': statusDone(issue.status),
              }"
            >
              {{ issue.status }}
            </div>
          </td>
          <td
            class="priority"
            :class="{
              'high-priority':
                isHighPriority(issue.priority) && !statusDone(issue.status),
            }"
          >
            {{ issue.priority }}
          </td>
          <td class="delete">
            <img
              class="icon"
              src="../assets/img/delete2.png"
              alt="Delete"
              @click="openDeleteModal(issue)"
            />
          </td>
        </tr>
      </table>

      <div v-if="isLoading" class="spinner">
        <vue-simple-spinner
          size="30"
          line-size="4"
          line-fg-color="#5B831E"
          line-bg-color="#f1f3f8"
          speed="1"
        ></vue-simple-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import AddIssue from "./AddIssue.vue";
import Comments from "./Comments.vue";
import { mapGetters, mapActions } from "vuex";
import { getStringFromDate } from "../utils/dates";
import * as api from "@/utils/api";
export default {
  name: "AllIssues",
  data() {
    return {
      addIssueIsVisible: false,
      commentsAreVisible: false,
      comment: "",
      isLoading: false,
    };
  },
  computed: mapGetters(["allIssues", "issuesCount"]),
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),
    getStringFromDate(date) {
      return getStringFromDate(date);
    },
    popupAddIssue() {
      this.addIssueIsVisible = !this.addIssueIsVisible;
    },
    openDeleteModal(issue) {
      this.$emit("openDeleteModal", issue);
    },
    openEditModal(issue) {
      this.$emit("openEditModal", issue);
    },
    openCommentsModal(comment) {
      if (comment) this.comment = comment;
      this.commentsAreVisible = !this.commentsAreVisible;
    },

    // Issue status
    statusToDo(status) {
      return status === "To do";
    },
    statusInProgress(status) {
      return status === "In progress";
    },
    statusDone(status) {
      return status === "Done";
    },

    async moveToDone(issue) {
      issue.status = "Done";
      await api.editIssue(issue);
      // await this.$store.dispatch("getAllIssues");
    },

    // Issue priority
    isHighPriority(priority) {
      return priority === "High";
    },
    isLowPriority(priority) {
      return priority === "Low";
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.getAllIssues();
    this.isLoading = false;
  },
  components: {
    AddIssue,
    Comments,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  min-width: 780px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: #f1f3f8;
}
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 780px;
  max-width: 1200px;
  width: 90%;
}
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  padding: 20px;
}
.counter {
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
}
.add-issue-button {
  border: 2px solid #2c365e;
  color: #2c365e;
  background: #d9dff3;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  height: 30px;
  line-height: 20px;
  width: 100px;
  margin-right: 10px;
}
.add-issue-button:hover {
  background: #2c365e;
  color: #f1f3f8;
  cursor: pointer;
}

/* table styles */
.table {
  min-width: 720px;
  width: 100%;
  color: #303030;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-right: 10px;
  border-collapse: collapse;
}
.table-top-row {
  border-bottom: 1px solid #3f4458;
  height: 40px;
  text-transform: uppercase;
  font-size: 11px;
  text-align: left;
}
th {
  font-weight: 700;
}
.table-row {
  border-bottom: 1px dashed #3f4458;
  height: 40px;
  font-size: 12px;
}
td {
  font-weight: 500;
}
/* table columns styles */
.title {
  min-width: 395px;
  max-width: 800px;
  padding-left: 10px;
}
td.title {
  text-decoration: underline;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 10px;
  color: #293874;
}
td.title:hover {
  cursor: pointer;
}
.comments,
.mark-as-done {
  width: 40px;
  text-align: center;
}
.created-at {
  width: 80px;
  padding-left: 10px;
}
.status {
  width: 100px;
  padding-left: 10px;
}
.status-div {
  box-sizing: border-box;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  width: 80px;
  margin: auto 10px;
  padding-left: 10px;
  border-radius: 4px;
}
.status-to-do {
  background: #ae7bdd;
}
.status-in-progress {
  background: #f55b2c;
}
.status-done {
  background: #34dd42;
}
.priority {
  width: 70px;
  padding-left: 10px;
}
.high-priority {
  font-weight: 700;
  color: #000000;
}
/* .medium-priority {
}
.low-priority {
  font-weight: 400;
} */
.delete {
  width: 50px;
  padding-left: 10px;
}
td.delete {
  padding: 0;
  text-align: center;
}
.icon {
  height: 20px;
  width: 20px;
}
.icon:hover {
  height: 22px;
  width: 22px;
  cursor: pointer;
}
</style>
