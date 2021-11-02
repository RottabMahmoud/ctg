<template>
  <v-container fluid>
    <v-row class="d-flex align-content-space-around flex-wrap">
      <v-card
        v-for="cand in candidatesList"
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
    <v-pagination
      class="pagination mb-2"
      v-model="page"
      :length="Math.ceil(this.allCandidates.length / 10)"
      @input="updatePage"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CandidateOverview",
  data() {
    return {
      page: 1,
      pageSize: 10,
      listCount: 0,
      candidatesList: [],
    };
  },
  computed: mapGetters(["allCandidates"]),
  created() {
    this.fetchCandidates();
  },
  beforeUpdate() {
    console.log(this.allCandidates, "DAYTA");
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
};
</script>