import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './authStore';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authStore
  },
  state: {},
  actions: {},
  mutations: {}
});
