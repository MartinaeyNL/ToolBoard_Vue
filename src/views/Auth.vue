<template>
  <div>
    <h1>LALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALA</h1>
    <h2>Code = [{{ this.parsedParams.access_token }}]</h2>
  </div>
</template>

<script>
import websocket_api from "@/logic/websocket_api.js";
import axios from "axios";
export default {
  data: () => ({
    parsedParams: {},
    websocketError: null,
    websocketCon: null
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
          // eslint-disable-next-line no-console
          console.log(response.data.data[0]);
          this.websocketCon = websocket_api.methods.launchWebSocket(
            "localhost", // Url
            8096, // Port
            "/auth/", // Route
            evt => {
              // eslint-disable-next-line no-console
              console.log(evt);
              this.authenticate();
            },
            evt => {
              // eslint-disable-next-line no-console
              console.log(evt);
              this.handleMessage(evt.data);
            },
            evt => {
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
    authenticate() {
      var wsMessage = {
        messageType: "authenticate",
        object: this.parsedParams.access_token
      };
      //alert("Sending message..");
      websocket_api.methods.sendMessage(this.websocketCon, wsMessage);
    }
  }
};
</script>
