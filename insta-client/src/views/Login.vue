    
<template>
  <div>
    <!-- <div class="form-group">
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
    </div>-->
    <v-app>
      <v-card width="400" class="mx-auto mt-10">
        <h1>Instagram-Clone</h1>

        <v-card-title></v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="mdi-account-circle" label="Username"></v-text-field>
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
          <v-btn color="success">
            <router-link to="/register">Sign Up</router-link>
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "login",
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
h1 {
  text-align: center;
  font-family: cursive;
  font-size: 40px;
  margin-top: 15px;
}
</style>