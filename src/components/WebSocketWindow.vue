<template>
  <div class="buttonBox">
    <span>Testjee</span>
    <v-btn @click="launchWebSocket">Connect WebSocket</v-btn>
  </div>
</template>

<script>
import websocket from "../logic/websocket.js";

export default {
  mixins: [websocket]
};
</script>
