<template>
  <v-card color="rgb(22, 36, 88, 0.8)" height="260">
    <v-img
      src="https://obsproject.com/assets/images/new_icon_small.png"
      aspect-ratio="1"
      height="128"
      width="128"
      style="float: right; position: relative; margin: 2% 2% 0 0;"
    ></v-img>
    <v-card-title>OBS Studio</v-card-title>
    <v-card-subtitle>
      <span>
        Adds support for quality statistics,
        <br />starting and stopping the stream,
        <br />switching scenes, and many
        more.
      </span>
    </v-card-subtitle>
    <v-card-actions>
      <v-layout wrap>
        <v-flex xs8 sm8 md8 lg8 xl8 style="padding-right: 12px;">
          <v-text-field
            prepend-icon="mdi-web"
            placeholder="IP Address"
            single-line
            :value="address"
            @change="address = $event"
          ></v-text-field>
        </v-flex>
        <v-flex xs4 sm4 md4 lg4 xl4 style="padding-left: 12px;">
          <v-text-field
            placeholder="Port"
            single-line
            :value="port"
            @change="port = $event"
            maxlength="5"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-layout align-center style="margin-top: 8px;">
            <v-flex xs5 sm5 md5 lg5 xl5>
              <v-btn
                color="green darken-3"
                @click="launchWebSocket()"
                :disabled="isWebSocketActive()"
              >Connect</v-btn>
            </v-flex>
            <v-flex xs7 sm7 md7 lg7 xl7>
              <div>
                <v-icon color="grey">mdi-information</v-icon>
                <v-label v-if="isWebSocketActive()">You've already connected!</v-label>
                <v-label v-else-if="checkCredentials()">Everything is ready!</v-label>
                <v-label v-else>The credentials are incorrect.</v-label>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-actions>
    <!--https://obsproject.com/assets/images/new_icon_small.png-->
  </v-card>
</template>

<script>
import websocket_api from "../../logic/websocket_api.js";
export default {
  data: () => ({
    address: "localhost",
    port: 4444,
    route: ""
  }),
  methods: {
    launchWebSocket() {
      if (this.checkCredentials()) {
        var socket = websocket_api.methods.launchWebSocket(
          this.address,
          this.port,
          this.route,
          this.$store,
          "setWebSocketOBSError"
        );
        alert("Test11111111");
        this.$store.commit("setWebSocketOBS", socket);
        alert("Test999999999999 woop");
        alert("[" + this.$store.getters.webSocketOBS_IsNull + "]");
      } else {
        alert("Invalid IP Address and/or Port!");
      }
    },
    isWebSocketActive() {
      var isNull = this.$store.getters.webSocketOBS_IsNull;
      //alert("Tijdens de check was de websocket_api [" + isNull + "]");
      if (isNull == true) {
        return false;
      } else {
        return true;
      }
    },
    checkCredentials() {
      if (this.address != "" && this.port != "" && this.route == "") {
        return true;
      }
      return false;
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
