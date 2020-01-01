<template>
  <div v-if="this.websocketErrorCheck() != null">
    <span>Connection closed with code [#{{ this.websocketError.code }}]</span>
  </div>
  <div v-else-if="this.websocketIsNull() == true">
    Connecting to the server..
  </div>
  <div v-else>
    <h3>List of Chat Lobbies</h3>
    <v-card v-for="lobby in this.chatLobbies" :key="lobby.displayname">
      <span>{{ lobby.displayname }}</span>
      <v-card-actions>
        <v-btn @click="joinChatLobby(lobby.displayname)">Join!</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import websocket from "@/logic/websocket.js";

export default {
  data: () => ({
    websocketError: null,
    websocketCon: null,
    chatLobbies: []
  }),
  created: function() {
    this.websocketCon = websocket.methods.launchWebSocket(
      "localhost",
      8096,
      "/streamerchat/",
      this.$store,
      "setWebSocketChatError"
    );
    this.websocketCon.onmessage = evt => {
      // eslint-disable-next-line no-console
      console.log(evt);
      this.handleMessage(evt.data);
    };
    this.$store.commit("setWebSocketChat", this.websocketCon);
  },
  methods: {
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
        //alert("State = [" + this.websocketCon.readyState + "]");
        if (this.websocketCon.readyState == 1) {
          return true;
        }
        return false;
      }
      return false;
    },
    handleMessage(data) {
      var result = JSON.parse(data);
      switch (result.messageType) {
        case "chatLobbyList":
          this.chatLobbies = result.object;
      }
      //alert("[" + data.messageType + "]");
      //alert("[" + data.object + "]");
    },
    joinChatLobby(name) {
      alert(name); // Temporary
    }
  }
};
</script>
