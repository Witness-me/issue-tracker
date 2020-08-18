<template>
  <div class="wrapper">
    <hr />
    <h1>Dashboard</h1>
    <p class="issue-counter">{{ `You have ${issuesCount} issues in total` }}</p>
    <div class="dashboard-container">
      <section class="dashboard-section">
        <h3 class="section-header">To do</h3>
        <div class="section-insides">
          <div class="section-point" v-for="issue in allIssues" v-bind:key="issue._id">
            <template v-if="issue.status === 'To do'">
              {{ getStringFromDate(issue.createdAt) }}
              <p class="title">{{ issue.title }}</p>
              <p class="status">Status: {{ issue.status }}</p>
              <p class="comments">Comments: {{ issue.comments }}</p>
              <p class="priority">Priority: {{ issue.priority }}</p>
              <button class="delete-issue-button" v-on:click="deleteIssue(issue._id)">Delete</button>
            </template>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <h3 class="section-header">In progress</h3>
        <div class="section-insides">
          <div class="section-point" v-for="issue in allIssues" v-bind:key="issue._id">
            <template v-if="issue.status === 'In progress'">
              {{ getStringFromDate(issue.createdAt) }}
              <p class="title">{{ issue.title }}</p>
              <p class="status">Status: {{ issue.status }}</p>
              <p class="comments">Comments: {{ issue.comments }}</p>
              <p class="priority">Priority: {{ issue.priority }}</p>
            </template>
          </div>
        </div>
      </section>

      <section class="dashboard-section">
        <h3 class="section-header">Done</h3>
        <div class="section-insides">
          <div class="section-point" v-for="issue in allIssues" v-bind:key="issue._id">
            <template v-if="issue.status === 'Done'">
              {{ getStringFromDate(issue.createdAt) }}
              <p class="title">{{ issue.title }}</p>
              <p class="status">Status: {{ issue.status }}</p>
              <p class="comments">Comments: {{ issue.comments }}</p>
              <p class="priority">Priority: {{ issue.priority }}</p>
            </template>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allIssues", "issuesCount"])
  },
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),
    getStringFromDate(date) {
      // eslint-disable-next-line prettier/prettier
      return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getFullYear()}`;
    }
  },
  async mounted() {
    this.getAllIssues();
  }
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
  /* border-bottom: 1px solid red; */
}

.delete-issue-button {
  margin-bottom: 20px;
}
</style>
