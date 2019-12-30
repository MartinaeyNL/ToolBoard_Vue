import Vue from "vue";
import Vuex from "vuex";

import ChatCard from "@/components/ConnectionCards/ChatCard.vue";
import OBSStudioCard from "@/components/ComponentCards/OBS_Studio/StatsCard.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    const logos = {
      1: "https://obsproject.com/assets/images/new_icon_small.png",
      2: "https://image.flaticon.com/icons/png/128/491/491555.png", // https://image.flaticon.com/icons/png/128/331/331310.png
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
    };
    return {
      availableComponents: ["OBS Statistics", "Streamer Chats"],
      detailedComponentList: [
        {
          name: "OBS Statistics",
          group: "OBS Studio",
          picture: logos[1],
          card: OBSStudioCard
        },
        {
          name: "Streamer Chats",
          group: "Unique / Specials",
          picture: logos[2],
          card: ChatCard
        }
      ],
      activeComponents: [],
      webSocketOBS: null,
      webSocketChat: null
    };
  },
  mutations: {
    addActiveComponent(state, value) {
      //state.activeComponents = value;
      state.activeComponents.push(value);
    },
    removeActiveComponent(state, value) {
      state.activeComponents.remove(value);
    },
    setWebSocketOBS(state, value) {
      state.webSocketOBS = value;
    },
    setWebSocketChat(state, value) {
      state.webSocketChat = value;
    }
  },
  getters: {
    availableComponents: state => state.availableComponents,
    detailedComponentList: state => state.detailedComponentList,
    activeComponents: state => state.activeComponents,
    webSocketOBS: state => state.webSocketOBS,
    webSocketChat: state => state.webSocketChat
  },
  actions: {},
  modules: {}
});
