<template>
  <div>
    <Navbar v-on:switchTab="switchTab($event)" />
    <AddIssue
      v-if="addIssueIsVisible"
      v-on:closePopup="popupAddIssue($event)"
    />
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
    ></component>
    <button class="add-issue-button" v-on:click="popupAddIssue">
      +
    </button>
  </div>
</template>

<script>
import AllIssues from "../components/AllIssues.vue";
import Dashboard from "../components/Dashboard.vue";
import Navbar from "../components/Navbar.vue";
import AddIssue from "../components/AddIssue.vue";
import DeleteIssue from "../components/DeleteIssue.vue";
import EditIssue from "../components/EditIssue.vue";
export default {
  name: "Home",
  data() {
    return {
      currentTab: "Dashboard",
      addIssueIsVisible: false,
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
    popupAddIssue() {
      this.addIssueIsVisible = !this.addIssueIsVisible;
    },
    popupDeleteIssue() {
      this.deleteIssueIsVisible = !this.deleteIssueIsVisible;
    },
    popupEditIssue() {
      this.editIssueIsVisible = !this.editIssueIsVisible;
    },
    openDeleteModal(issue) {
      this.currentIssue = issue;
      this.popupDeleteIssue();
    },
    openEditModal(issue) {
      this.currentIssue = issue;
      this.popupEditIssue();
    },
  },
  components: {
    Navbar,
    Dashboard,
    AllIssues,
    AddIssue,
    DeleteIssue,
    EditIssue,
  },
};
</script>

<style scoped>
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
