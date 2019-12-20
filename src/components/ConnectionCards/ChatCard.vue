<template>
  <v-card color="pink darken-1">
    <v-img
      src="https://image.flaticon.com/icons/png/512/1798/1798529.png"
      aspect-ratio="1"
      height="128"
      width="128"
      style="float: right; position: relative; margin: 2% 2% 0 0;"
    ></v-img>
    <v-card-title>Streamer Rooms</v-card-title>
    <v-card-subtitle>
      <span
        >Special feature where you can chat<br />
        and share information with other streamers<br />
        such as settings and stats.</span
      >
    </v-card-subtitle>
    <v-card-actions>
      <v-layout wrap>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-layout wrap align-center>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <div>
                <v-switch label="Launch on Startup"></v-switch>
              </div>
            </v-flex>
            <v-flex xs5 sm5 md5 lg5 xl5>
              <v-btn
                color="green darken-3"
                @click="launchWebSocket"
                :disabled="!socketIsClosed || !socketIsNull"
                >Connect</v-btn
              >
            </v-flex>
            <v-flex xs7 sm7 md7 lg7 xl7>
              <div>
                <v-icon color="grey lighten-2">mdi-information</v-icon>
                <v-label>You've already connected!</v-label>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import websocket from "../../logic/websocket.js";
export default {
  data: () => ({
    address: "localhost",
    port: 8096,
    route: "/streamerchat/"
  }),
  methods: {
    launchWebSocket() {
      if (this.address != "" && this.port != "" && this.route != "") {
        if (this.$store.getters.webSocketChat == null) {
          websocket.methods.launchWebSocket(
            this.address,
            this.port,
            this.route,
            this.$store,
            "setWebSocketChat"
          );
        } else {
          alert("You already got a connection!");
        }
      } else {
        alert("Invalid IP Address and/or Port!");
      }
    },
    socketIsClosed() {
      var isClosed = websocket.methods.isClosed();
      alert("The close state of the socket is [" + isClosed + "]");
      return isClosed;
    },
    socketIsNull() {
      var isNull = websocket.methods.isNull();
      alert("The close state of the socket is [" + isNull + "]");
      return isNull;
    }
  }
};
</script>

<style>
.cardTransparent {
  background-color: rgb(22, 36, 88, 0.3) !important;
  border-color: transparent !important;
}
</style>
