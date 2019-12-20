import Vue from "vue";
import Vuex from "vuex";

import ChatCard from "../components/ConnectionCards/ChatCard.vue";
import OBSStudioCard from "../components/ConnectionCards/OBSStudioCard.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    availableComponents: {
      CHAT_CARD: ChatCard,
      OBSSTUDIO_CARD: OBSStudioCard
    },
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
    availableComponents: state => state.availableComponents,
    webSocketOBS: state => state.webSocketOBS,
    webSocketChat: state => state.webSocketChat
  },
  actions: {},
  modules: {}
});
