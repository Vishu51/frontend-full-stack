<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>{{ companyName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark>{{ isLoggedIn ? "Logout" : "Login" }}</v-btn>
    </v-app-bar>

    <div class="" style="background-color: #00254d;">
      <!-- Add your content section here -->  
      <FlightBooking></FlightBooking>
    </div>

    <v-footer app dark>
      <!-- Add your footer content here -->
      <span>&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</span>
    </v-footer>
  </div>
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
