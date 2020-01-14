<template>
  <div style="margin: 5%;">
    <div v-if="websocketError != null">
      <h1>Something went wrong!</h1>
      <h3>Closed the connection with code #{{ this.websocketError.code }}</h3>
    </div>
    <div v-else>
      <h1>Authenticating...</h1>
    </div>
  </div>
</template>

<script>
import websocket_api from "@/logic/websocket_api.js";
import axios from "axios";
export default {
  data: () => ({
    parsedParams: {},
    websocketError: null,
    websocketCon: null,
    displayname: null,
    twitchUserId: null
  }),
  created: function() {
    // Split data from the URL
    const params = this.$route.hash
      .split("&")
      .map(part => part.replace(/#/, ""));
    params.forEach(param => {
      const parts = param.split("=");
      this.parsedParams[parts[0]] = parts[1];
    });

    // Get data from Twitch
    if (this.parsedParams.access_token != null) {
      axios
        .get("https://api.twitch.tv/helix/users", {
          headers: {
            Authorization: "Bearer " + this.parsedParams.access_token
          }
        })
        .then(response => {
          // Setting the variables to the data received from GET request
          this.displayname = response.data.data[0].display_name;
          this.twitchUserId = response.data.data[0].id;

          // Creating Websocket
          this.websocketCon = websocket_api.methods.launchWebSocket(
            "localhost", // Url
            8096, // Port
            "/auth/", // Route
            () => {
              // OnOpen()
              this.authenticate();
            },
            evt => {
              // OnMessage()
              this.handleMessage(evt.data);
            },
            evt => {
              // OnClose()
              this.websocketError = evt;
            }
          );
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          alert("Authentication failed... Try again!");
        });
    } else {
      alert("Something went wrong with the authentication, try again.");
    }
  },
  methods: {
    handleMessage(data) {
      var result = JSON.parse(data);
      switch (result.messageType) {
        case "ERROR":
          alert(result.object + " ");
          break;
        case "AUTHENTICATE":
          this.websocketCon.close();
          this.$router.push("home");
          break;
      }
    },
    authenticate() {
      var wsMessage = {
        messageType: "AUTHENTICATE",
        object: JSON.stringify({
          displayname: this.displayname,
          twitchUserId: this.twitchUserId
        })
      };
      //alert("Sending message..");
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
    }
  }
};
</script>
