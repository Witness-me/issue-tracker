<template>
  <div>
    <Server />
    <Footer />
  </div>
</template>

<script>
import Server from "../components/Server.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "ServerResponce",
  components: {
    Server,
    Footer
  }
};
</script>
