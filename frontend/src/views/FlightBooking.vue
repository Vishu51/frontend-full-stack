<template>
  <div>
    <v-container>
      <h1 class="text-center white--text">Search your trip</h1>
      <v-tabs v-model="currentItem">
        <v-tab>One Way</v-tab>
        <v-tab>Round Trip</v-tab>
        <v-tab>Multi-City</v-tab>
      </v-tabs>
      <v-tabs-items v-model="currentItem">
        <v-tab-item>
          <v-card elevation="10" outlined class="d-flex" max-width="">
            <v-card-text>
              <div>From</div>
              <p class="text-h4 text--primary">Bangalore</p>
              <p>[BRL]</p>
            </v-card-text>
            <v-divider vertical class="vertical-seperator"></v-divider>
            <v-card-text class="ml-6">
              <div>From</div>
              <p class="text-h4 text--primary">Delhi</p>
              <p>[BRL]</p>
            </v-card-text>
            <v-divider vertical class="vertical-seperator"></v-divider>
            <!-- ------------------------------------------------------------------- -->
            <v-card-text>
              <div>DEPARTURE DATE</div>
              <p class="text-h4 text--primary">9 jun 2023</p>
              <p>Friday</p>
            </v-card-text>
            <v-divider vertical class="vertical-seperator"></v-divider>
            <v-card-text>
              <div>RETURN DATE</div>
              <p class="text--primary">
                Book a round trip <br />
                to save more
              </p>
            </v-card-text>
            <v-divider vertical class="vertical-seperator"></v-divider>
            <v-card-text>
              <div>TRAVELER & CLASS</div>
              <p class="text-h4 text--primary">1 Traveler(s)</p>
              <p>Economy</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
    <div class="d-flex justify-center justify-lg-space-around mt-8">
      <c-card
        v-for="item in cardItem"
        :key="item.id"
        :cardTitle="item.cardTitle"
        :cardSubTitle="item.cardSubTitle"
        :cardTitle1="item.cardTitle1"
        :cardTitle2="item.cardTitle2"
        :cardBtnShare="item.cardBtnShare"
        :cardBtnExplore="item.cardBtnExplore"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: null,
      companyName: "traveleasyway.com",
      isLoggedIn: false,
      cardItem: [
        {
          id: 1,
          cardTitle: "Top 10 Australian beaches to visit",
          cardSubTitle: "Number 10",
          cardTitle1: "White haven Beach",
          cardTitle2: "White sunday Island, Whitsunday Islands",
          cardBtnShare: "Share",
          cardBtnExplore: "Explore",
        },
        {
          id: 2,
          cardTitle: "Top 10 Australian beaches to visit",
          cardSubTitle: "Number 10",
          cardTitle1: "White haven Beach",
          cardTitle2: "White sunday Island, Whitsunday Islands",
          cardBtnShare: "Share",
          cardBtnExplore: "Explore",
        },
        {
          id: 3,
          cardTitle: "Top 10 Australian beaches to visit",
          cardSubTitle: "Number 10",
          cardTitle1: "White haven Beach",
          cardTitle2: "White sunday Island, Whitsunday Islands",
          cardBtnShare: "Share",
          cardBtnExplore: "Explore",
        },
      ],
      navigationItems: [
        { title: "Home", icon: "mdi-home" },
        { title: "About", icon: "mdi-information" },
        { title: "Services", icon: "mdi-cogs" },
        { title: "Contact", icon: "mdi-email" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
