
<template>
  <div>
    <div>
      <v-app>
        <v-card width="400" class="mx-auto mt-10">
          <h1>Register to Instagram</h1>

          <v-card-title></v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="forename" placeholder="First Name"></v-text-field>
              <v-text-field v-model="surname" placeholder="Last Name"></v-text-field>
              <v-text-field v-model="surname" prepend-icon="mdi-email" label="Email"></v-text-field>

              <v-text-field
                :type="showPassword ? 'text': 'Password' "
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' "
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Register</v-btn>

            <v-spacer></v-spacer>
            <v-btn color="info">
              <router-link to="/login">Login</router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      // To toggle password visibility
      showPassword: false
    };
  }
};
</script>

<style>
</style>