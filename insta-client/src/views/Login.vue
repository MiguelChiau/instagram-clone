    
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
            <v-text-field prepend-icon="mdi-email" label="Email" v-model="email"></v-text-field>
            <v-text-field
              v-model="password"
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
          <v-btn color="info" @click="login">Login</v-btn>

          <v-spacer></v-spacer>
          <v-btn color="success">
            <router-link to="/register">Sign Up</router-link>
          </v-btn>
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
  },

  //   Method to collect the login details
  methods: {
    login() {
      //The home page api is store on state in store/index.js
      let api_url = this.$store.state.api_url;
      console.log(api_url);

      if (this.email == "" || this.password == "")
        return alert("Please fill in all required fields");

      // With $http its actually to refer to axios for api requests
      this.$http
        .post(api_url + "user/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.auth) {
            // storing josn web token (jwt is necessary for authentication to allow user to go to home page after loging in) in localStorage
            localStorage.setItem("jwt", response.data.token);
            console.log("jtw", localStorage.getItem("jwt"));

            //this will push the user to the home page
            this.$router.push("/");
            console.log(this.$router);
          } else {
            alert("There was an error");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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