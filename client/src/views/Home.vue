<template>
  <div>
    <Navbar v-on:switchTab="switchTab($event)" />

    <DeleteIssue
      :currentIssue="currentIssue"
      v-if="deleteIssueIsVisible"
      v-on:closePopup="popupDeleteIssue($event)"
    />
    <EditIssue
      :issue="currentIssue"
      v-if="editIssueIsVisible"
      v-on:closePopup="popupEditIssue($event)"
    />
    <component
      v-bind:is="currentTab"
      v-on:openDeleteModal="openDeleteModal($event)"
      v-on:openEditModal="openEditModal($event)"
      class="main"
    ></component>
    <!-- <button class="add-issue-button" v-on:click="popupAddIssue">
      +
    </button> -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AllIssues from "../components/AllIssues.vue";
import Dashboard from "../components/Dashboard.vue";
import EditIssue from "../components/EditIssue.vue";
import DeleteIssue from "../components/DeleteIssue.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  data() {
    return {
      currentTab: "Dashboard",
      deleteIssueIsVisible: false,
      editIssueIsVisible: false,
      currentIssue: {},
    };
  },
  computed: {},
  methods: {
    switchTab(newTab) {
      this.currentTab = newTab;
    },

    popupDeleteIssue() {
      this.deleteIssueIsVisible = !this.deleteIssueIsVisible;
    },
    popupEditIssue() {
      this.editIssueIsVisible = !this.editIssueIsVisible;
    },
    openEditModal(issue) {
      this.currentIssue = issue;
      this.popupEditIssue();
    },
    openDeleteModal(issue) {
      this.currentIssue = issue;
      this.popupDeleteIssue();
    },
  },
  components: {
    Navbar,
    Dashboard,
    AllIssues,
    DeleteIssue,
    EditIssue,
    Footer,
  },
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 80px);
}
.add-issue-button {
  position: fixed;
  bottom: 15%;
  right: 8%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px black solid;
  font-size: 30px;
  text-align: center;
}
</style>
