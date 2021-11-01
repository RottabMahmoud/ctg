<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        {{ this.allCandidates }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CandidateOverview",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["fetchCandidates"]),
  },
  computed: mapGetters(["allCandidates"]),
  created() {
    this.fetchCandidates();
  },
};
</script>


