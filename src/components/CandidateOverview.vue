<template>
  <v-container fluid>
    <v-row class="d-flex align-content-space-around flex-wrap">
      <v-card
        v-for="cand in allCandidates"
        :key="cand.id"
        class="pa-xs-4 ma-10"
        width="400"
      >
        <v-col cols="12">
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-avatar>
                <v-img :src="cand.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content align="left">
                <v-list-item-title>
                  {{ cand.first_name }} {{ cand.last_name }}
                </v-list-item-title>
                <v-list-item-title>{{ cand.job_title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item-title>
              <v-icon dense color="grey "> mdi-phone </v-icon>
              {{ cand.phone }}
            </v-list-item-title>

            <v-list-item-title>
              <v-icon dense color="grey "> mdi-mail </v-icon>
              {{ cand.email }}
            </v-list-item-title>
          </v-list-group>
        </v-col>
      </v-card>
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


