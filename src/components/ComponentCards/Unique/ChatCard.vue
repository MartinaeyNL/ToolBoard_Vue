<template>
  <div v-if="this.websocketErrorCheck() != null">
    <span>Connection closed with code [#{{ this.websocketError.code }}]</span>
  </div>
  <div v-else-if="this.websocketIsNull() == true">Connecting to the server..</div>
  <div v-else></div>
</template>

<script>
import websocket from "@/logic/websocket.js";
export default {
  data: () => ({
    websocketError: null,
    websocketCon: null
  }),
  created: function() {
    this.websocketCon = websocket.methods.launchWebSocket(
      "localhost",
      8096,
      "/streamerchat/",
      this.$store,
      "setWebSocketChatError"
    );
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
    }
  }
};
</script>
