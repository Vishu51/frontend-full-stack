<template>
  <v-card class="" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ cardTitle }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ cardSubTitle }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ cardTitle1 }}</div>
      <div>{{ cardTitle2 }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>
        {{ cardBtnShare }}
      </v-btn>

      <v-btn color="orange" text>
        {{ cardBtnExplore }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    cardTitle: {
      type: String,
      default: "Default",
    },
    cardSubTitle: {
      type: String,
      default: "Default",
    },
    cardTitle1: {
      type: String,
      default: "Default",
    },
    cardTitle2: {
      type: String,
      default: "Default",
    },
    cardBtnShare: {
      type: String,
      default: "Default",
    },
    cardBtnExplore: {
      type: String,
      default: "Default",
    },
  },
};
</script>

<style lang="scss" scoped></style>
