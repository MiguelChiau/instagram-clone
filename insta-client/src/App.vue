<template>
  <div id="app">
    <Header v-if="isAuthenticated"></Header>
    <router-view />
    <Footer v-if="isAuthenticated"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    }
  }

  // beforeMount() {
  //   this.$store.commit("isAuthenticated");
  // }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  font-family: "roboto", Arial, Helvetica, sans-serif;
}
#app {
  width: 100vw;
  height: 100%;
  min-height: 100vh;
}
</style>

