<template>
  <div>
    <Navbar v-on:switchTab="switchTab($event)" />
    <AddIssue
      v-if="addIssueIsVisible"
      v-on:closePopup="popupAddIssue($event)"
    />
    <component v-bind:is="currentTab"></component>
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
export default {
  name: "Home",
  data() {
    return {
      currentTab: "Dashboard",
      addIssueIsVisible: false,
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
  },
  components: {
    Navbar,
    Dashboard,
    AllIssues,
    AddIssue,
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
