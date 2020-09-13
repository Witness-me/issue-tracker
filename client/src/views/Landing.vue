<template>
  <div class="landing-wrapper">
    <div class="landing-container">
      <h1 class="landing-title">Having trouble with getting things done?</h1>
      <h2 class="landing-title h2">Try out our issue tracking app!</h2>
      <div class="landing-text-container">
        <ul>
          <li>Manage unlimited number of tasks</li>
          <li>Easily categorise all your issues</li>
          <li>Free. Always.</li>
        </ul>
      </div>
      <button class="login-button" @click="handleLogin()">Sign up / Log In</button>
      <div class="screenshot"></div>
    </div>
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
  }
};
</script>

<style scoped>
.landing-wrapper {
  height: 100vh;
  /* max-height: 100%; */
  min-width: 800px;
  min-height: 600px;
  box-sizing: border-box;
  /* align-content: center;
  text-align: center; */
}
.landing-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 30px;
  /* margin-top: 60px; */
  background: #f0670c;
  background-image: linear-gradient(100deg, #f0670c, #eca97c);
  color: #f1f3f8;
  box-sizing: border-box;
  border-radius: 15px;
  width: 70%;
  min-width: 750px;
  max-width: 1000px;
  height: 300px;
  padding: 30px 40px;
  font-weight: 500;
}
.landing-title {
  font-size: 30px;
  /* font-weight: 500; */
  /* padding-bottom: 20px; */
}
.h2 {
  font-size: 22px;
  padding: 10px 0;
}
li {
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
}

.login-button {
  position: absolute;
  top: 120px;
  right: 50px;
  border: 3px solid #2c365e;
  color: #2c365e;
  background: #d9dff3;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 800;
  height: 40px;
  line-height: 20px;
  width: 200px;
  margin-right: 10px;
}
.login-button:hover {
  background: #2c365e;
  color: #f1f3f8;
  cursor: pointer;
}
.screenshot {
  height: 300px;
  width: 700px;
  background: cornflowerblue;
}
</style>
