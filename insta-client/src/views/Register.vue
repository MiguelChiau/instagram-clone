
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
              <v-text-field v-model="email" prepend-icon="mdi-email" label="Email"></v-text-field>

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
            <v-btn color="success" @click="register">Register</v-btn>

            <v-spacer></v-spacer>
            <v-btn color="info">
              <router-link to="/login">Login</router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </div>
    <div class="error_msg" v-if="hasErrors">{{error}}</div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      forename: "",
      surname: "",
      email: "",
      password: "",
      // To toggle password visibility
      showPassword: false,
      hasErrors: false,
      error: ""
    };
  },
  methods: {
    register() {
      let api_url = this.$store.state.api_url;
      if (
        this.email == "" ||
        this.password == "" ||
        this.forename == "" ||
        this.surname == ""
      ) {
        return alert("Please fill in all required fields");
      }

      // With $http its actually to refer to axios for api requests
      this.$http
        .post(api_url + "user/register", {
          forename: this.forename,
          surname: this.surname,
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.auth) {
            localStorage.setItem("jwt", response.data.token);
            this.$router.push("/");
            console.log(response);
          } else {
            alert("There was an error");
            console.log(response);
            // alert("The password is not correct");
            this.error = response.data.msg;
            this.hasErrors = true;
          }
        })
        .catch(err => {
          console.log(err);
          this.error = err;
          this.hasErrors = true;
        });
    }
  }
};
</script>

<style>
</style>