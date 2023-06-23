<template>
  <div class="login-background">
    <v-row style="height: 100vh !important;" class="d-flex align-center justify-center mx-auto">
      <v-card
        elevation="2"
        outlined
        height="400"
        class="col-3 align-center d-flex justify-center"
      >
        <div>
          <v-card-title>
            <h2>Login Yourself</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              :label="email ? 'Email' : ''"
              type="email"
              single-line
              persistent
              dense
              solo
            ></v-text-field>
            <v-text-field
              v-model="password"
              :label="password ? 'Password' : ''"
              type="password"
              dense
              solo
            ></v-text-field>
            <v-btn
              color="primary"
              class="mt-4"
              block
              :disabled="!email || !password"
              type="submit"
              @click.stop="login()"
            >
              Login
            </v-btn>
            <v-btn
              color="primary"
              class="mt-4"
              block
              :disabled="!email || !password"
              type="submit"
              @click.stop="signUp($event)"
            >
              Sign Up
            </v-btn>
            <i>Register if not a user</i>
          </v-card-text>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    localStorage.removeItem("token");
  },
  methods: {
    signUp(e) {
      if (e) {
        this.$router.push("/signup");
      }
    },
    login() {
      const body = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:8000/users/login", body)
        .then((res) => {
          if (res.data && res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/about");
          } else {
            console.log("No data found");
          }
        })
        .catch((err) => {
          console.log("Login Error", err);
        });
      // Perform login logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>
<style scoped>
.login-background {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/login-background.avif");
}
</style>
