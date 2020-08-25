<template>
  <div class="wrapper">
    <h1>All issues</h1>
    <div class="issues-container">
      <p class="counter">
        {{ `You have ${issuesCount} issues in total` }}
      </p>
      <table>
        <tr>
          <th></th>
          <th>#</th>
          <th>Created at</th>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(issue, index) in allIssues" v-bind:key="issue._id">
          <td><a href="#" v-if="issue.status !== 'Done'">Done</a></td>
          <td>{{ `${issuesCount - index}` }}</td>
          <td>{{ getStringFromDate(issue.createdAt) }}</td>
          <td>{{ issue.title }}</td>
          <td>{{ issue.status }}</td>
          <td>{{ issue.priority }}</td>
          <td>
            <button class="edit-issue-button" @click="openEditModal(issue)">
              Edit
            </button>
          </td>
          <td>
            <button class="delete-issue-button" @click="openDeleteModal(issue)">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
//import * as api from "@/utils/api";
import { mapGetters, mapActions } from "vuex";
import { getStringFromDate } from "../utils/dates";
export default {
  name: "AllIssues",
  computed: mapGetters(["allIssues", "issuesCount"]),
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
  },
  async mounted() {
    this.getAllIssues();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.issue {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
