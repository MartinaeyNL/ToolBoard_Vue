<template>
  <div v-if="this.websocketErrorCheck() != null">
    <span>Connection closed with code [#{{ this.websocketError.code }}]</span>
  </div>
  <div v-else-if="this.websocketIsNull() == true">Connecting to the server..</div>
  <div v-else>
    <v-layout>
      <v-flex xl11 lg11 md11 sm10 xs10>
        <h3>List of Chat Lobbies</h3>
      </v-flex>
      <v-flex xl1 lg1 md1 sm2 xs2>
        <v-icon style="height: 16; width: 16;" @click="refreshLobbyList()">mdi-reload</v-icon>
      </v-flex>
    </v-layout>
    <div v-if="this.chatLobbies.length > 0" :key="renderIndex">
      <v-card v-for="lobby in this.chatLobbies" :key="lobby.displayname">
        <span>{{ lobby.displayname }}</span>
        <v-card-actions>
          <v-btn @click="joinChatLobby(lobby.displayname)">Join!</v-btn>
        </v-card-actions>
        <v-layout v-for="user in lobby.users" :key="user.sessionId">
          <v-flex xl6 lg6 md6 sm6 xs6>
            <span>{{ user.sessionId }}</span>
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
    renderIndex: 0,
    websocketError: null,
    websocketCon: null,
    chatLobbies: []
  }),
  created: function() {
    this.websocketCon = websocket_api.methods.launchWebSocket(
      "localhost", // Url
      8096, // Port
      "/streamerchat/", // Route
      this.$store, // Store
      "setWebSocketChatError", // ErrorHandler
      null, // OnOpen
      evt => {
        // eslint-disable-next-line no-console
        console.log(evt);
        this.handleMessage(evt.data);
      },
      null // OnClose
    );
    //this.websocketCon.onmessage = evt => {
    //  // eslint-disable-next-line no-console
    //  console.log(evt);
    //  this.handleMessage(evt.data);
    //};
    this.$store.commit("setWebSocketChat", this.websocketCon);
  },
  methods: {
    rerenderUserList() {
      this.renderIndex += 1;
    },
    websocketIsNull() {
      return this.$store.getters.webSocketChat_IsNull;
    },
    websocketErrorCheck() {
      var error = this.$store.getters.webSocketChat_CheckError;
      this.websocketError = error;
      return error;
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
        case "error":
          alert(result.object + " ");
          break;
        case "getAllChatLobbies":
          this.chatLobbies = result.object;
          break;
      }
      //alert("[" + data.messageType + "]");
      //alert("[" + data.object + "]");
    },
    joinChatLobby(name) {
      alert("Joining " + name + "..");
      var wsMessage = {
        messageType: "joinChatLobby",
        object: name,
        controller: "ChatLobbyController"
      };
      //alert("Sending message..");
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
      this.refreshLobbyList();
    },
    refreshLobbyList() {
      var wsMessage = {
        messageType: "getAllChatLobbies",
        object: null,
        controller: "ChatLobbyController"
      };
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
    }
  }
};
</script>
