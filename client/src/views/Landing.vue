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
      <!-- <img src="../assets/img/landing/Dashboard" alt=""> -->
      <button class="login-button" @click="handleLogin()">
        Sign up / Log In
      </button>
      <div class="slider">
        <Carousel
          :perPage="1"
          :centerMode="true"
          :autoplay="true"
          :autoplayTimeout="5000"
          :loop="true"
          :paginationEnabled="false"
          :speed="1000"
        >
          <Slide>
            <!-- <img src="../assets/landing/AllIssues.png" alt="" /> -->
            <img
              src="../assets/img/landing/Dashboard.png"
              alt=""
              class="screenshot"
            />
          </Slide>
          <Slide>
            <img
              src="../assets/img/landing/AllIssues.png"
              alt=""
              class="screenshot"
            />
          </Slide>
        </Carousel>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { login } from "@/utils/auth";
import { Carousel, Slide } from "vue-carousel";
import Footer from "../components/Footer.vue";
export default {
  name: "Landing",
  methods: {
    handleLogin() {
      login();
    },
  },
  components: {
    Carousel,
    Slide,
    Footer,
  },
};
</script>

<style scoped>
.landing-wrapper {
  height: 100vh;
  min-width: 930px;
  /* min-height: 600px; */
  box-sizing: border-box;
}
.landing-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 30px;
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
.slider {
  position: absolute;
  top: 240px;
  left: 80px;
  width: 100%;
  min-width: 500px;
  max-width: 1000px;
  /* background: cornflowerblue; */
  /* width: 410px; */
  margin-right: 5px;
  /* border: 1px solid rgb(143, 143, 143); */
  border-radius: 5px;
}
.screenshot {
  width: 100%;
  /* border-bottom: 1px solid rgb(143, 143, 143); */
  border-radius: 5px;
  /* min-width: 500px;
  max-width: 900px; */
  /* width: 600px; */
  /* height: 300px; */
  /* width: auto; */
}
</style>
