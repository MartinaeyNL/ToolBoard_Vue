import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    webSocketOBS: null,
    webSocketChat: null
  },
  mutations: {
    setWebSocketOBS(state, value) {
      state.webSocketOBS = value;
    },
    setWebSocketChat(state, value) {
      state.webSocketChat = value;
    }
  },
  getters: {
    webSocketOBS: state => state.webSocketOBS,
    webSocketChat: state => state.webSocketChat
  },
  actions: {},
  modules: {}
});
