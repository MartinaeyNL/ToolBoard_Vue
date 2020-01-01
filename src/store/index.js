import Vue from "vue";
import Vuex from "vuex";

import ChatCard from "../components/ComponentCards/Unique/ChatCard.vue";
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
      webSocketOBSError: null,
      webSocketChat: null,
      webSocketChatError: null
    };
  },
  mutations: {
    // Component area
    addActiveComponent(state, value) {
      state.activeComponents.push(value);
    },
    removeActiveComponent(state, value) {
      state.activeComponents.remove(value);
    },
    // WebSocket setters
    setWebSocketOBS(state, value) {
      state.webSocketOBS = value;
    },
    setWebSocketOBSError(state, value) {
      state.webSocketOBSError = value;
    },
    setWebSocketChat(state, value) {
      state.webSocketChat = value;
    },
    setWebSocketChatError(state, value) {
      state.webSocketChatError = value;
    }
  },
  getters: {
    availableComponents: state => state.availableComponents,
    detailedComponentList: state => state.detailedComponentList,
    activeComponents: state => state.activeComponents,
    webSocketOBS_IsNull: state => {
      return state.webSocketOBS == null;
    },
    webSocketOBS_CheckError: state => {
      return state.webSocketOBSError;
    },
    webSocketChat_IsNull: state => {
      return state.webSocketChat == null;
    },
    webSocketChat_CheckError: state => {
      return state.webSocketChatError;
    }
  },
  actions: {},
  modules: {
    chatLobbies: {
      state() {
        return {
          chatLobbies: []
        };
      },
      mutations: {
        addChatLobby(state, value) {
          state.chatLobbies.push(value);
        },
        removeChatLobby(state, value) {
          state.chatLobbies.remove(value);
        }
      },
      getters: {}
    }
  }
});
