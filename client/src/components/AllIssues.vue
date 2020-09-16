<template>
  <div class="allissues-wrapper">
    <div class="table-container">
      <div class="table-header">
        <p class="table-header__counter">
          {{ `You currently have ${issuesCount} issues in total` }}
        </p>
        <div class="table-header__sorting-container">
          <p>Sort by:</p>
          <select v-model="sortBy" @change="sortIssues()" class="">
            <option value="date-new-first">Date (Newest first)</option>
            <option value="date-old-first">Date (Oldest first)</option>
            <option value="priority-high-first">Priority (High to low)</option>
            <option value="priority-low-first">Priority (Low to high)</option>
            <option value="toDo-inProgress-done"
              >Status (To do &#8680; In progress &#8680; Done)
            </option>
            <option value="inProgress-toDo-done"
              >Status (In progress &#8680; To do &#8680; Done)
            </option>
            <option value="done-inProgress-toDo"
              >Status (Done &#10140; In progress &#10140; To do)
            </option>
          </select>
        </div>
        <button @click="popupAddIssue()" class="table-header__add-issue-button">
          Submit issue
        </button>
      </div>
      <table class="table">
        <tr class="table__top-row">
          <th class="table__title">Issue</th>
          <th class="table__comments"></th>
          <th class="table__mark-as-done"></th>
          <th class="table__created-at">Created</th>
          <th class="table__status">Status</th>
          <th class="table__priority">Priority</th>
          <th class="table__delete">Delete</th>
        </tr>
        <tr
          v-for="issue in allIssues"
          v-bind:key="issue._id"
          class="table__row"
        >
          <td @click="openEditModal(issue)" class="table__title">
            {{ issue.title }}
          </td>
          <td class="table__comments">
            <img
              v-if="issue.comments"
              class="table__icon"
              src="../assets/img/comments.png"
              alt="See comments"
              title="See comments"
              @click="openCommentsModal(issue.comments)"
            />
          </td>
          <td class="table__mark-as-done">
            <img
              v-if="issue.status !== 'Done'"
              class="table__icon"
              src="../assets/img/tick2.png"
              alt="Mark as done"
              title="Mark as done"
              @click="moveToDone(issue)"
            />
          </td>
          <td class="table__created-at">
            {{ getStringFromDate(issue.createdAt) }}
          </td>
          <td>
            <div
              class="table__status-content"
              :class="{
                'table__status-to-do': statusToDo(issue.status),
                'table__status-in-progress': statusInProgress(issue.status),
                'table__status-done': statusDone(issue.status),
              }"
            >
              {{ issue.status }}
            </div>
          </td>
          <td
            class="table__priority"
            :class="{
              'table__high-priority':
                isHighPriority(issue.priority) && !statusDone(issue.status),
            }"
          >
            {{ issue.priority }}
          </td>
          <td class="table__delete">
            <img
              class="table__icon"
              src="../assets/img/delete.png"
              alt="Delete"
              @click="openDeleteModal(issue)"
            />
          </td>
        </tr>
      </table>
    </div>
    <AddIssue
      v-if="addIssueIsVisible"
      v-on:closePopup="popupAddIssue($event)"
    />
    <Comments
      v-if="commentsAreVisible"
      :comment="comment"
      v-on:closePopup="openCommentsModal($event)"
    />
    <div v-if="isLoading" class="spinner">
      <vue-simple-spinner
        :size="30"
        :line-size="4"
        :speed="1"
        line-fg-color="#5B831E"
        line-bg-color="#f1f3f8"
      ></vue-simple-spinner>
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
      sortBy: "date-new-first",
    };
  },
  computed: {
    ...mapGetters([
      "allIssues",
      "issuesCount",
      "highPriority",
      "mediumPriority",
      "lowPriority",
    ]),
    sortedIssues() {
      return this.allIssues;
    },
  },
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),
    getStringFromDate(date) {
      return getStringFromDate(date);
    },

    // Modal windows
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

    // Get issue status
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
      await this.$store.dispatch("getAllIssues");
    },

    // Get issue priority (for bold text)
    isHighPriority(priority) {
      return priority === "High";
    },

    // Implement sorting issues
    sortIssues() {
      switch (this.sortBy) {
        case "date-new-first":
          this.sortByDateNewFirst();
          break;
        case "date-old-first":
          this.sortByDateOldFirst();
          break;
        case "priority-high-first":
          this.sortByDateNewFirst();
          this.sortByPriorityHighFirst();
          break;
        case "priority-low-first":
          console.log(2);
          break;
        case "toDo-inProgress-done":
          console.log(2);
          break;
        case "inProgress-toDo-done":
          console.log(2);
          break;
        case "done-inProgress-toDo":
          console.log(2);
          break;
      }
    },
    sortByDateNewFirst() {
      this.allIssues.sort((a, b) => b.createdAt - a.createdAt);
    },
    sortByDateOldFirst() {
      this.allIssues.sort((a, b) => a.createdAt - b.createdAt);
    },
    sortByPriorityHighFirst() {
      this.allIssues = null;
      // this.highPriority.concat(
      //   this.mediumPriority,
      //   this.lowPriority
      // );
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
.allissues-wrapper {
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
  min-width: 830px;
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
.table-header__counter {
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
}
.table-header__add-issue-button {
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
.table-header__add-issue-button:hover {
  background: #2c365e;
  color: #f1f3f8;
  cursor: pointer;
}

/* table styles */
.table {
  width: 100%;
  color: #303030;
  margin-bottom: 30px;
  border-collapse: collapse;
}
.table__top-row {
  border-bottom: 1px solid #3f4458;
  height: 40px;
  text-transform: uppercase;
  font-size: 11px;
  text-align: left;
  font-weight: 700;
}
.table__row {
  border-bottom: 1px dashed #3f4458;
  height: 40px;
  font-size: 12px;
  font-weight: 500;
}

/* table columns styles */
.table__title {
  min-width: 370px;
  max-width: 800px;
  padding-left: 10px;
}
td.table__title {
  text-decoration: underline;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 10px;
  color: #293874;
}
td.table__title:hover {
  cursor: pointer;
}
.table__comments,
.table__mark-as-done {
  width: 40px;
  min-width: 40px;
  text-align: center;
}
.table__created-at {
  width: 80px;
  min-width: 80px;
  padding-left: 10px;
}
.table__status {
  width: 100px;
  padding-left: 10px;
}
.table__status-content {
  box-sizing: border-box;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  width: 80px;
  margin: auto 10px;
  padding-left: 10px;
  border-radius: 4px;
}
.table__status-to-do {
  background: #ae7bdd;
}
.table__status-in-progress {
  background: #f55b2c;
}
.table__status-done {
  background: #34dd42;
}
.table__priority {
  width: 70px;
  min-width: 70px;
  padding-left: 10px;
}
.table__high-priority {
  font-weight: 700;
  color: black;
}
.table__delete {
  width: 50px;
  min-width: 50px;
  padding-left: 10px;
}
td.table__delete {
  padding: 0;
  text-align: center;
}
.table__icon {
  height: 20px;
  width: 20px;
}
.table__icon:hover {
  height: 22px;
  width: 22px;
  cursor: pointer;
}
</style>
