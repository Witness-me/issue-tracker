<template>
  <div class="wrapper">
    <!-- <p>Created by Vladislav Nikolaenko in 2020</p> -->
    <a href="mailto:vladislavnikolaenko@gmail.com">
      <img
        class="contact-icon"
        src="https://img.icons8.com/fluent-systems-regular/48/000000/email.png"
      />
    </a>

    <a href="https://github.com/winess-me">
      <img class="contact-icon" src="https://img.icons8.com/material-outlined/48/000000/github.png" />
    </a>
    <a href="https://t.me/witness_me">
      <img class="contact-icon" src="https://img.icons8.com/ios/50/000000/telegram-app.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.wrapper {
  height: 39px;
  background: #bbcde5;
  display: flex;
  justify-content: center;
  border-top: 1px solid #4d4ee3;
}
.contact-icon {
  height: 20px;
  margin: 10px 5px;
}
</style>
