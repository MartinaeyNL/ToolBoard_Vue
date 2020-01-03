<template>
  <div class="buttonBox">
    <span>Testjee</span>
    <v-btn @click="launchWebSocket">Connect WebSocket</v-btn>
    <v-form>
      <v-text-field v-model="txtInput" required label="Regular"></v-text-field>
      <v-btn @click="sendMessage">Send Message</v-btn>
    </v-form>
  </div>
</template>

<script>
import websocket_api from "../logic/websocket_api.js";
export default {
  methods: {
    launchWebSocket() {
      websocket_api.methods.launchWebSocket();
    },
    sendMessage() {
      websocket_api.methods.sendMessage(this.txtInput);
    }
  }
};
</script>
