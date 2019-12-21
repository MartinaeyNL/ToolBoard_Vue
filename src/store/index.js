import Vue from "vue";
import Vuex from "vuex";

//import ChatCard from "../components/ConnectionCards/ChatCard.vue";
//import OBSStudioCard from "../components/ConnectionCards/OBSStudioCard.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  /*data() {
    const logos = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
    };
  },*/
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
        { name: "OBS Statistics", group: "OBS Studio", picture: logos[1] },
        {
          name: "Streamer Chats",
          group: "Unique / Specials",
          picture: logos[2]
        }
      ],
      webSocketOBS: null,
      webSocketChat: null
    };
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
    detailedComponentList: state => state.detailedComponentList,
    webSocketOBS: state => state.webSocketOBS,
    webSocketChat: state => state.webSocketChat
  },
  actions: {},
  modules: {}
});
