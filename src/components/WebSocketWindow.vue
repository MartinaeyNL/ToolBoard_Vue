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
import websocket from "../logic/websocket.js";
export default {
  methods: {
    launchWebSocket() {
      websocket.methods.launchWebSocket();
    },
    sendMessage() {
      websocket.methods.sendMessage(this.txtInput);
    }
  }
};
</script>
