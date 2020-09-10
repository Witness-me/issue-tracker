<template>
  <div class="wrapper">
    <AddIssue
      v-if="addIssueIsVisible"
      :newIssueStatus="newIssueStatus"
      v-on:closePopup="popupAddIssue($event)"
    />
    <div class="dashboard-container">
      <section class="dashboard-section">
        <div class="section-header-container">
          <div>
            <h3 class="section-header">To do</h3>
            <div class="issues-count">
              <p v-if="statusToDoLength === 0">
                You have not yet planned any tasks to do
              </p>
              <p v-else-if="statusToDoLength === 1">
                You have 1 issue in your backlog
              </p>
              <p v-else>
                You have {{ statusToDoLength }} issues in your backlog
              </p>
            </div>
          </div>
          <div class="section-header-reverse">
            <img
              src="../assets/img/plus.png"
              class="add-issue-button"
              @click="openAddModal('To do')"
              alt="Add issue"
            />
          </div>
        </div>
        <div class="section-insides">
          <div
            class="section-point"
            v-for="issue in statusToDo"
            v-bind:key="issue._id"
          >
            <p class="update-date">
              Last updated at: {{ getStringFromDate(issue.updatedAt) }}
            </p>
            <p class="title">{{ issue.title }}</p>
            <p class="comments" v-if="issue.comments">{{ issue.comments }}</p>
            <div class="section-point-ending">
              <div class="priority">
                <span class="priority-block">Priority:</span>
                <span class="priority-block">
                  <svg class="priority-block" height="8" width="8">
                    <circle
                      v-if="issue.priority === 'High'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#F52416"
                    />
                    <circle
                      v-if="issue.priority === 'Medium'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#EBBC00"
                    />
                    <circle
                      v-if="issue.priority === 'Low'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#37D000"
                    />
                  </svg>
                </span>
              </div>
              <div class="section-point-ending-reverse">
                <img
                  class="dashboard-icon"
                  src="../assets/img/marker.png"
                  alt="Edit"
                  @click="openEditModal(issue)"
                />
                <img
                  class="dashboard-icon"
                  src="../assets/img/delete.png"
                  alt="Delete"
                  @click="openDeleteModal(issue)"
                />
                <img
                  class="dashboard-icon"
                  src="../assets/img/next.png"
                  alt="Move to current"
                  title="Move to current"
                  @click="moveToInProgress(issue)"
                />
                <img
                  class="dashboard-icon"
                  src="../assets/img/tick.png"
                  alt="Mark as done"
                  title="Mark as done"
                  @click="moveToDone(issue)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <div class="section-header-container">
          <div>
            <h3 class="section-header">In progress</h3>
            <div class="issues-count">
              <p v-if="statusInProgressLength === 0">
                High time to start working!
              </p>
              <p v-else-if="statusInProgressLength === 1">
                Сurrently working on 1 issue
              </p>
              <p v-else>
                Currently working on
                {{ statusInProgressLength }} issues
              </p>
            </div>
          </div>
          <div class="section-header-reverse">
            <img
              src="../assets/img/plus.png"
              class="add-issue-button"
              @click="openAddModal('In progress')"
              alt="Delete"
            />
          </div>
        </div>
        <div class="section-insides">
          <div
            class="section-point"
            v-for="issue in statusInProgress"
            v-bind:key="issue._id"
          >
            <p class="update-date">
              Last updated at: {{ getStringFromDate(issue.updatedAt) }}
            </p>
            <p class="title">{{ issue.title }}</p>
            <p class="comments" v-if="issue.comments">{{ issue.comments }}</p>
            <div class="section-point-ending">
              <div class="priority">
                <span class="priority-block">Priority:</span>
                <span class="priority-block">
                  <svg class="priority-block" height="8" width="8">
                    <circle
                      v-if="issue.priority === 'High'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#F52416"
                    />
                    <circle
                      v-if="issue.priority === 'Medium'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#EBBC00"
                    />
                    <circle
                      v-if="issue.priority === 'Low'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#37D000"
                    />
                  </svg>
                </span>
              </div>
              <div class="section-point-ending-reverse">
                <img
                  class="dashboard-icon"
                  src="../assets/img/marker.png"
                  alt="Edit"
                  @click="openEditModal(issue)"
                />
                <img
                  class="dashboard-icon"
                  src="../assets/img/delete.png"
                  alt="Delete"
                  @click="openDeleteModal(issue)"
                />
                <img
                  class="dashboard-icon"
                  src="../assets/img/tick.png"
                  alt="Mark as done"
                  title="Mark as done"
                  @click="moveToDone(issue)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <div class="section-header-container">
          <div>
            <h3 class="section-header">Done</h3>
            <div class="issues-count">
              <p v-if="statusDoneLength === 0">
                You have not yet finished any tasks...
              </p>
              <p v-else-if="statusDoneLength === 1">
                You have finished 1 task!
              </p>
              <p v-else>{{ statusDoneLength }} tasks finished. Keep it up!</p>
            </div>
          </div>
          <div class="section-header-reverse">
            <img
              src="../assets/img/plus.png"
              class="add-issue-button"
              @click="openAddModal('Done')"
              alt="Add issue"
            />
          </div>
        </div>
        <div class="section-insides">
          <div
            class="section-point"
            v-for="issue in statusDone"
            v-bind:key="issue._id"
          >
            <p class="update-date">
              Last updated at: {{ getStringFromDate(issue.updatedAt) }}
            </p>
            <p class="title">{{ issue.title }}</p>
            <p class="comments" v-if="issue.comments">{{ issue.comments }}</p>
            <div class="section-point-ending">
              <div class="priority">
                <span class="priority-block">Priority:</span>
                <span class="priority-block">
                  <svg class="priority-block" height="8" width="8">
                    <circle
                      v-if="issue.priority === 'High'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#F52416"
                    />
                    <circle
                      v-if="issue.priority === 'Medium'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#EBBC00"
                    />
                    <circle
                      v-if="issue.priority === 'Low'"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#37D000"
                    />
                  </svg>
                </span>
              </div>
              <div class="section-point-ending-reverse">
                <img
                  class="dashboard-icon"
                  src="../assets/img/marker.png"
                  alt="Edit"
                  @click="openEditModal(issue)"
                />
                <img
                  class="dashboard-icon"
                  src="../assets/img/delete.png"
                  alt="Delete"
                  @click="openDeleteModal(issue)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getStringFromDate } from "../utils/dates";
import { mapGetters, mapActions } from "vuex";
import AddIssue from "./AddIssue.vue";
import * as api from "@/utils/api";
import { user } from "../utils/auth";
export default {
  name: "Dashboard",
  data() {
    return {
      addIssueIsVisible: false,
      newIssueStatus: "To do",
    };
  },
  computed: {
    ...mapGetters(["allIssues"]),
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
  },
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),

    // date
    getStringFromDate(date) {
      return getStringFromDate(date);
    },

    // opening modals
    openAddModal(status = "To do") {
      this.newIssueStatus = status;
      this.popupAddIssue();
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

    // move to different section
    async moveToInProgress(issue) {
      issue.status = "In progress";
      await api.editIssue(issue);
      await this.$store.dispatch("getAllIssues");
    },
    async moveToDone(issue) {
      issue.status = "Done";
      await api.editIssue(issue);
      await this.$store.dispatch("getAllIssues");
    },
    // sorting
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
    user();
  },
  components: {
    AddIssue,
  },
};
</script>

<style scoped>
/* block styles */
.wrapper {
  background: #f1f3f8;
  min-height: calc(100vh - 80px);
}

.dashboard-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
}
.dashboard-section {
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 55px;
  min-width: 250px;
  max-width: 22%;
  border-radius: 5px;
  background: #2c365e;
  color: #f1f3f8;
  margin: 10px 5px;
  padding: 8px;
  padding-top: 5px;
}
.section-header-container {
  display: flex;
  padding-left: 10px;
  margin-bottom: 5px;
}
.section-header-reverse {
  display: flex;
  flex-grow: 10;
  flex-direction: row-reverse;
}
.add-issue-button {
  height: 23px;
  width: 23px;
  display: flex;
  margin: auto 3px;
}
.add-issue-button:hover {
  height: 25px;
  width: 25px;
  margin: auto 2px;
  cursor: pointer;
}

/* inside the section styles*/
.section-insides {
  max-height: calc(100vh - 153px);
  overflow-y: auto;
  color: #303030;
  /* sroll bars design (firefox) */
  scrollbar-width: thin;
  scrollbar-color: #bbcde5 transparent;
}
/* sroll bars design (webkit) */
.section-insides::-webkit-scrollbar {
  width: 7px;
}
.section-insides::-webkit-scrollbar-thumb {
  background-color: #bbcde5;
  border-radius: 10px;
}

.section-point {
  border-radius: 3px;
  background: #f1f3f8;
  margin-bottom: 6px;
  padding: 5px 8px;
}
.section-header {
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  margin: 0;
}
.issues-count {
  height: 15px;
  line-height: 15px;
  font-size: 11px;
}

/* points styles */
.update-date {
  font-size: 10px;
  font-style: italic;
  text-align: right;
  color: #757474;
}
.title {
  font-size: 13px;
  font-weight: 500;
  padding: 7px 0;
}
.comments {
  font-size: 12px;
  padding-bottom: 5px;
  font-style: italic;
}
.priority {
  font-size: 10px;
  line-height: 17px;
  display: inline-block;
}
svg {
  margin: auto 3px;
}
.section-point-ending {
  display: flex;
  height: 17px;
}
.section-point-ending-reverse {
  display: flex;
  justify-content: flex-end;
  flex-grow: 10;
}
.dashboard-icon {
  box-sizing: border-box;
  padding: 0;
  margin: 1px 5px;
  height: 15px;
  width: 15px;
}
.dashboard-icon:hover {
  height: 17px;
  width: 17px;
  margin: 0 4px;
  cursor: pointer;
}

.high-priority {
  background: #f1f3f8;
}
.low-priority {
  background: #f1f3f8;
}
</style>
