import axios from "axios";

const state = {
  candidates: [],
};

const getters = {
  allCandidates: (state) => state.candidates,
};

const actions = {
  async fetchCandidates({ commit }) {
    const response = await axios.get("api/candidates");
    console.log(response.data, "DATA##");

    commit("setCandidates", response.data);
  },
};

const mutations = {
  setCandidates: (state, candidates) => (state.candidates = candidates),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
