<template>
  <v-card color="rgb(100, 65, 164, 0.8)">
    <v-img
      src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"
      aspect-ratio="1"
      height="128"
      width="128"
      style="float: right; position: relative; margin: 2% 2% 0 0;"
    ></v-img>
    <v-card-title>Twitch</v-card-title>
    <v-card-subtitle>
      <span
        >Link your Twitch to get information<br />
        such as your chat, amount of followers,<br />
        viewer count and more.</span
      >
    </v-card-subtitle>
    <v-card-actions>
      <v-layout wrap>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-layout align-center>
            <v-flex xs6 sm6 md6 lg6 xl6>
              <v-btn color="green darken-3" @click="connectTwitch"
                >Authenticate</v-btn
              >
            </v-flex>
            <v-flex xs6 sm6 md6 lg6 xl6>
              <div>
                <v-icon color="grey">mdi-information</v-icon>
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
//import auth from "../../logic/auth.js";
export default {
  data: () => ({
    address: "localhost",
    port: 4444
  }),
  methods: {
    connectTwitch() {
      //auth.methods.connectToTwitch();
      window.location.href =
        "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=8si6r316a04nzt21ec0swvbfgdbjd2&redirect_uri=http://localhost:8081/auth&scope=chat:read";
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
