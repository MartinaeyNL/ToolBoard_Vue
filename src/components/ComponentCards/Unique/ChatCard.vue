<template>
  <div v-if="websocketIsNull()">Weird error</div>
  <div v-else-if="this.websocketErrorCheck() != null">
    <span>Connection closed with code [#{{ this.websocketError.code }}]</span>
  </div>
  <div v-else-if="this.websocketConnecting == true">Connecting to the Server..</div>
  <div v-else>Wooohoooo it worked again!</div>
</template>

<script>
import websocket from "@/logic/websocket.js";
export default {
  data: () => ({
    websocketError: null,
    websocketConnecting: true
  }),
  created: function() {
    var socket = websocket.methods.launchWebSocket(
      "localhost",
      8096,
      "/streamerchat/",
      this.$store,
      "setWebSocketChatError"
    );
    this.$store.commit("setWebSocketChat", socket);
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
    websocketIsActive() {
      return true;
    }
  }
};
</script>
