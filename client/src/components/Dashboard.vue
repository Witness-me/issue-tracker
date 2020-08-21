<template>
  <div class="wrapper">
    <hr />
    <h1>Dashboard</h1>
    <p class="issue-counter">
      {{ `You have ${issuesCount} issues in total` }}
    </p>
    <div class="dashboard-container">
      <section class="dashboard-section">
        <h3 class="section-header">To do</h3>
        <div class="section-insides">
          <div class="issues-count">
            <p v-if="statusToDoLength === 0">
              You have not planned any tasks to do! Why not do it now?
            </p>
            <p v-else-if="statusToDoLength === 1">
              You have 1 issue in your backlog!
            </p>
            <p v-else>
              You have {{ statusToDoLength }} issues in your backlog!
            </p>
          </div>
          <div
            class="section-point"
            v-for="(issue, index) in statusToDo"
            v-bind:key="issue._id"
            v-bind:class="{}"
          >
            <p>#{{ index + 1 }}</p>
            <p>Last updated at: {{ getStringFromDate(issue.updatedAt) }}</p>
            <p class="title">{{ issue.title }}</p>
            <p class="comments" v-if="issue.comments">
              Comments: {{ issue.comments }}
            </p>
            <p class="priority">Priority: {{ issue.priority }}</p>
            <button class="edit-issue-button" @click="openEditModal(issue)">
              Edit
            </button>
            <button class="delete-issue-button" @click="openDeleteModal(issue)">
              Delete
            </button>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <h3 class="section-header">In progress</h3>
        <div class="section-insides">
          <div class="issues-count">
            <p v-if="statusInProgressLength === 0">
              You are not currently working on any issues. High time to start!
            </p>
            <p v-else-if="statusInProgressLength === 1">
              You are currently working on 1 issue!
            </p>
            <p v-else>
              You are currently working on
              {{ statusInProgressLength }} issues!
            </p>
          </div>
          <div
            class="section-point"
            v-for="(issue, index) in statusInProgress"
            v-bind:key="issue._id"
          >
            <p>#{{ index + 1 }}</p>
            <p>Last updated at: {{ getStringFromDate(issue.updatedAt) }}</p>
            <p class="title">{{ issue.title }}</p>
            <p class="comments" v-if="issue.comments">
              Comments: {{ issue.comments }}
            </p>
            <p class="priority">Priority: {{ issue.priority }}</p>
            <button class="edit-issue-button" @click="openEditModal(issue)">
              Edit
            </button>
            <button class="delete-issue-button" @click="openDeleteModal(issue)">
              Delete
            </button>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <h3 class="section-header">Done</h3>
        <div class="section-insides">
          <div class="issues-count">
            <p v-if="statusDoneLength === 0">
              You have not yet finished any tasks...
            </p>
            <p v-else-if="statusDoneLength === 1">
              You have finished 1 task!
            </p>
            <p v-else>
              You have finished {{ statusDoneLength }} tasks! Keep it up!
            </p>
          </div>
          <div
            class="section-point"
            v-for="(issue, index) in statusDone"
            v-bind:key="issue._id"
          >
            <p>#{{ index + 1 }}</p>
            <p>Last updated at: {{ getStringFromDate(issue.updatedAt) }}</p>
            <p class="title">{{ issue.title }}</p>
            <p class="comments" v-if="issue.comments">
              Comments: {{ issue.comments }}
            </p>
            <p class="priority">Priority: {{ issue.priority }}</p>
            <button class="edit-issue-button" @click="openEditModal(issue)">
              Edit
            </button>
            <button class="delete-issue-button" @click="openDeleteModal(issue)">
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getStringFromDate } from "../utils/dates";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      issueIdForDeleting: "",
      deleteIssueIsVisible: false,
    };
  },
  computed: {
    ...mapGetters(["allIssues", "issuesCount"]),
    statusToDo() {
      const todoIssues = this.allIssues.filter(
        issue => issue.status === "To do"
      );
      this.sortByUpdateTime(todoIssues);
      return this.sortByPriority(todoIssues);
    },

    statusToDoLength() {
      return this.statusToDo.length;
    },

    statusInProgress() {
      const issuesInProgress = this.allIssues.filter(
        issue => issue.status === "In progress"
      );
      this.sortByUpdateTime(issuesInProgress);
      return this.sortByPriority(issuesInProgress);
    },
    statusInProgressLength() {
      return this.statusInProgress.length;
    },

    statusDone() {
      const issuesDone = this.allIssues.filter(
        issue => issue.status === "Done"
      );
      return this.sortByUpdateTime(issuesDone);
    },
    statusDoneLength() {
      return this.statusDone.length;
    },

    isHighPriority(issue) {
      return issue.priority === "High";
    },
  },
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),
    getStringFromDate(date) {
      return getStringFromDate(date);
    },

    openDeleteModal(issue) {
      this.$emit("openDeleteModal", issue);
    },
    openEditModal(issue) {
      this.$emit("openEditModal", issue);
    },
    sortByPriority(array) {
      const highPriority = array.filter(issue => issue.priority === "High");
      const mediumPriority = array.filter(issue => issue.priority === "Medium");
      const lowPriority = array.filter(issue => issue.priority === "Low");
      return highPriority.concat(mediumPriority, lowPriority);
    },
    sortByUpdateTime(array) {
      return array.sort((a, b) => b.updatedAt - a.updatedAt);
    },
  },
  async mounted() {
    this.getAllIssues();
  },
};
</script>

<style scoped>
.wrapper {
  min-width: 620px;
}

.dashboard-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
}
.dashboard-section {
  flex-grow: 1;
  min-height: 100px;
  min-width: 200px;
  max-width: 25%;
  border-radius: 10px;
  background-color: #37bb73;
  color: #ffffff;
}
.section-insides {
  background: yellowgreen;
}
.section-point {
  background: olivedrab;
}
.high-priority {
  background: rebeccapurple;
}
</style>
