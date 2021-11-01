import Vuex from "vuex";
import Vue from "vue";
import candidates from "./modules/candidates";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    candidates,
  },
});
