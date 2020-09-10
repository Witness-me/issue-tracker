<template>
  <div>
    <p>Having trouble with getting things done?</p>
    <p>
      Try out our issue tracking app! Manage unlimited number of tasks with us
      for absolutely no charge!
    </p>
    <button class="login-button" @click="handleLogin()">
      Sign up / Log In
    </button>
  </div>
</template>

<script>
import { isLoggedIn, login, logout } from "@/utils/auth";
export default {
  name: "Landing",
  methods: {
    handleLogin() {
      login();
    },
    // handleLogout() {
    //   logout();
    // },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<style scoped></style>
