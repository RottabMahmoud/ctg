<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Candidate Overview</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <candidate-overview></candidate-overview>
    </v-main>
  </v-app>
</template>

<script>
import CandidateOverview from "./components/CandidateOverview";

export default {
  name: "App",
  components: {
    CandidateOverview,
  },
};
</script>
