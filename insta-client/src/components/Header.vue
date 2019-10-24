<template>
  <div class="header">
    <div class="header-container">
      <h1>Instagram</h1>
      <v-btn color="info" @click="logout">Logout</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #eee;
  border-bottom: 1px solid #ccc;
  z-index: 9999;
}

.header-container {
  display: flex;
  justify-content: space-evenly;
}
</style>