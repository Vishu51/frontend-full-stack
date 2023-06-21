<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>{{ companyName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark>{{ isLoggedIn ? "Logout" : "Login" }}</v-btn>
    </v-app-bar>

    <v-main style="background-color: #00254d;">
      <!-- Add your content section here -->
      <FlightBooking></FlightBooking>
    </v-main>

    <v-footer app dark>
      <!-- Add your footer content here -->
      <span>&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
import FlightBooking from './FlightBooking.vue';
export default {
  name: 'About',
  components: {
    FlightBooking
  },
  data() {
    return {
      companyName: "traveleasyway.com",
      isLoggedIn: false
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
