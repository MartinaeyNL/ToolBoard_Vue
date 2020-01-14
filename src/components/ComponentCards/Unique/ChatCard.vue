<template>
  <div v-if="this.websocketError != null">
    <span>Connection closed with code [#{{ this.websocketError.code }}]</span>
  </div>
  <div v-else-if="this.websocketCon == null">Connecting to the server..</div>
  <div v-else>
    <v-layout>
      <v-flex xl11 lg11 md11 sm10 xs10>
        <h3>List of Chat Lobbies</h3>
      </v-flex>
      <v-flex xl1 lg1 md1 sm2 xs2>
        <v-icon style="height: 16; width: 16;" @click="refreshLobbyList()"
          >mdi-reload</v-icon
        >
      </v-flex>
    </v-layout>
    <div v-if="this.chatLobbies.length > 0">
      <v-card v-for="lobby in this.chatLobbies" :key="lobby.sessions">
        <span>{{ lobby.displayName }}</span>
        <v-card-actions>
          <v-btn @click="joinChatLobby(lobby.displayName)">Join!</v-btn>
          <v-btn @click="leaveChatLobby(lobby.displayName)">Leave!</v-btn>
        </v-card-actions>
        <v-layout v-for="session in lobby.sessions" :key="session.sessionId">
          <v-flex xl6 lg6 md6 sm6 xs6>
            <span>{{ session.sessionId }}</span>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
import websocket_api from "@/logic/websocket_api.js";

export default {
  data: () => ({
    renderIndex: 100,
    websocketError: null,
    websocketCon: null,
    chatLobbies: []
  }),
  created: function() {
    this.websocketCon = websocket_api.methods.launchWebSocket(
      "localhost", // Url
      8096, // Port
      "/streamerchat/", // Route
      null, // OnOpen
      evt => {
        // eslint-disable-next-line no-console
        console.log(evt);
        this.handleMessage(evt.data);
      },
      evt => {
        this.websocketError = evt;
      }
    );
    //this.websocketCon.onmessage = evt => {
    //  // eslint-disable-next-line no-console
    //  console.log(evt);
    //  this.handleMessage(evt.data);
    //};
    //this.$store.commit("setWebSocketChat", this.websocketCon);
  },
  methods: {
    rerenderUserList() {
      alert("Rerendering! Ofzo.");
      this.renderIndex += 1;
    },
    websocketIsNull() {
      return this.$store.getters.webSocketChat_IsNull;
    },
    websocketIsReady() {
      if (this.websocketCon != null) {
        if (this.websocketCon.readyState == 1) {
          return true;
        }
      }
      return false;
    },
    handleMessage(data) {
      var result = JSON.parse(data);
      switch (result.messageType) {
        case "ERROR":
          alert(result.object + " ");
          break;
        case "GET_ALL_CHAT_LOBBIES":
          this.chatLobbies = result.object;
          //this.rerenderUserList();
          break;
      }
      //alert("[" + data.messageType + "]");
      //alert("[" + data.object + "]");
    },
    joinChatLobby(name) {
      alert("Joining " + name + "..");
      var wsMessage = {
        messageType: "JOIN_CHAT_LOBBY",
        object: name
      };
      //alert("Sending message..");
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
    },
    leaveChatLobby(name) {
      alert("Leave " + name + "..");
      var wsMessage = {
        messageType: "LEAVE_CHAT_LOBBY",
        object: name
      };
      //alert("Sending message..");
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
    },
    refreshLobbyList() {
      var wsMessage = {
        messageType: "GET_ALL_CHAT_LOBBIES",
        object: null
      };
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
    }
  }
};
</script>
