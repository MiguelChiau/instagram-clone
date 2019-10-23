
<template>
  <div>
    <v-app>
      <h1>Wellcome to Instagram</h1>

      <v-card-actions>
        <v-btn color="info" @click="logout">Logout</v-btn>

        <v-spacer></v-spacer>
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