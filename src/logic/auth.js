const axios = require("axios").default;

//var authCode;

function connectToTwitch() {
  /*axios
    .request({
      url: "/oauth2/authorize",
      method: "POST",
      baseURL: "https://id.twitch.tv/",
      auth: {
        username: "8si6r316a04nzt21ec0swvbfgdbjd2",
        password: "29m63i3gsb6ytyb3700nbcga4w9eac"
      },
      data: {
        "grant-type": "client_credentials",
        scope: "public"
      }
    })
    .then(response => {
      alert(response);
    });*/
  axios
    .get(
      "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=8si6r316a04nzt21ec0swvbfgdbjd2&redirect_uri=http://localhost:8081/auth&scope=chat:read"
      //"https%3A%2F%2Fid.twitch.tv%2Foauth2%2Fauthorize%3Fclient_id%3D8si6r316a04nzt21ec0swvbfgdbjd2%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A8081%2F%23%2F%26response_type%3Dcode%26scope%3Dchat%3Aread"
    )
    .then(function(response) {
      alert("THEN: " + response);
    })
    .catch(function(error) {
      alert("FAIL: " + error);
    });
}

export default {
  name: "auth",
  methods: {
    connectToTwitch
  }
};
