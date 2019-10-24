
<template>
  <div>
    <v-app>
      <v-card-actions>
        <h1>Instagram Feed</h1>
        <v-spacer></v-spacer>

        <v-btn color="info" @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-app>
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