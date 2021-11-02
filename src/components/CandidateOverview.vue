<template>
  <v-container fluid>
    <v-row>
      <!-- Vuetify Checkbox Component, as an Option to view all Data -->
      <v-col align="center" cols="12">
        <v-checkbox
          class="ml-7"
          v-model="checkbox"
          :label="`View All`"
        ></v-checkbox>
      </v-col>
    </v-row>
    <!-- Our Mapped Data -->
    <v-row>
      <v-card
        class="pa-xs-4 ma-10 d-xl-flex align-content-space-around flex-wrap"
        width="400"
        v-for="cand in checkbox ? allCandidates : candidatesList"
        :key="cand.id"
      >
        <v-col cols="12">
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-avatar>
                <v-img :src="cand.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content align="left">
                <v-list-item-title>
                  <b>{{ cand.first_name }} {{ cand.last_name }}</b>
                </v-list-item-title>
                <v-list-item-title>{{ cand.job_title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item-title>
              <v-icon class="ma-7" dense color="#323232"> mdi-phone </v-icon>
              {{ cand.phone }}
            </v-list-item-title>

            <v-list-item-title>
              <v-icon class="ma-7" dense color="#323232"> mdi-email </v-icon>
              {{ cand.email }}
            </v-list-item-title>
          </v-list-group>
        </v-col>
      </v-card>
    </v-row>
    <v-row>
      <!-- Vuetify Pagination Component -->
      <v-col align="center" cols="12">
        <v-pagination
          class="pagination mb-2"
          color="#1976D2"
          circle
          v-if="!checkbox"
          v-model="page"
          :length="Math.ceil(this.allCandidates.length / 10)"
          @input="updatePage"
        ></v-pagination>
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
      checkbox: false,
      candidatesList: [],
      page: 1,
      pageSize: 10,
      listCount: 0,
    };
  },
  created() {
    this.fetchCandidates();
  },
  beforeUpdate() {
    this.initPage();
    this.updatePage(this.page);
  },

  methods: {
    ...mapActions(["fetchCandidates"]),
    initPage() {
      this.listCount = this.allCandidates.length;
      if (this.listCount < this.pageSize) {
        this.candidatesList = this.allCandidates;
      } else {
        this.candidatesList = this.allCandidates.slice(0, this.pageSize);
      }
    },
    updatePage(pageIndex) {
      let start = (pageIndex - 1) * this.pageSize;
      let end = pageIndex * this.pageSize;
      this.candidatesList = this.allCandidates.slice(start, end);
      this.page = pageIndex;
    },
  },
  computed: mapGetters(["allCandidates"]),
};
</script>