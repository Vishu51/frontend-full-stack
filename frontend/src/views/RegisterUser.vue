<template>
  <div>
    <v-row class="d-flex mx-auto mt-8 align-center justify-center">
      <v-carousel
        cycle
        delimiter-icon="mdi-minus"
        height="600"
        
        :show-arrows="false"
        class="col-6 pa-0 ma-0"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <v-card
        elevation="2"
        outlined
        height="400"
        class="col-3 align-center d-flex justify-center"
      >
        <div>
          <v-card-title>
            <h2>Register Yourself</h2>
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
              @click.stop="signUp()"
            >
              Signup
            </v-btn>
          </v-card-text>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      items: [
        {
          src: require("../assets/img/signup-wirking.avif"),
        },
        {
          src: require("../assets/img/signup-tech.avif"),
        },
      ],
    };
  },
  methods: {
    login() {
      const body = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:8000/users/login', body,)
      .then(res => {
        if (res.data && res.status === 200) {
          console.log('from signup page:', res.data.message);
          console.log('from signup page:', res.data.token);
          localStorage.setItem('token', res.data.token);
          this.$router.push('/')
        } else {
          console.log('No data found');
        }
      })
      .catch(err => {
        console.log('Login Error', err);
      })
    },
    signUp() {
      const body = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:8000/users/signup", body)
        .then((res) => {
          if (res.status === 201) {
            console.log("signupppppp:", res.data.message);
            this.login()
          } else {
            console.log("No Data Found");
          }
        })
        .catch((err) => {
          if (res.status === 409) {
            console.log("User Already Exist");
          }
          console.log("Login Error", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-carousel__controls {
  align-items: center;
  background: #ffffff;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  width: 100%;
  z-index: 1;
}
          
::v-deep .v-item-group {
    // flex: 0 1 auto;
    // position: relative;
    max-width: 50%;
    // transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>
