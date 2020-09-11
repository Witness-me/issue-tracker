<template>
  <div>
    <h1>Having trouble with getting things done?</h1>
    <p>
      Try out our issue tracking app! Manage unlimited number of tasks with us
      for absolutely no charge!
    </p>
    <button class="button" @click="handleLogin()">Sign up / Log In</button>
  </div>
</template>

<script>
import { login } from "@/utils/auth";
export default {
  name: "Landing",
  methods: {
    handleLogin() {
      login();
    }
    // isLoggedIn() {
    //   return isLoggedIn();
    // }
  }
};
</script>

<style scoped></style>
