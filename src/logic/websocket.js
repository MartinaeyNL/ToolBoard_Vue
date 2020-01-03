import { isNullOrUndefined } from "util";

function launchWebSocket(
  host,
  port,
  route,
  store,
  errorHandler,
  onopen,
  onmessage,
  onclose
) {
  // Check if browser supports websocket
  var socket = null;
  if ("WebSocket" in window) {
    socket = new WebSocket("ws://" + host + ":" + port + route);

    // When opening
    if (onopen == null) {
      socket.onopen = function() {
        alert("The connection is ready!");
      };
    } else {
      socket.onopen = onopen;
    }

    // When it receives a message
    if (onmessage == null) {
      socket.onmessage = function(evt) {
        alert("Received the message: [" + evt.data + "]");
      };
    } else {
      socket.onmessage = onmessage;
    }

    // When the connection closes
    if (onclose == null) {
      socket.onclose = function(evt) {
        alert("Closed the connection..");
        store.commit(errorHandler, evt);
        alert("Error code: [#" + evt.code + "]");
      };
    } else {
      socket.onclose = onclose;
    }
  } else {
    alert("Your browser doesn't support WebSockets. Lol.");
  }

  // Making sure the connection closes on refresh.
  window.onbeforeunload = function() {
    socket.close();
  };

  return socket;
}

/*--------------------------------------------------------------------*/

function sendMessage(socket, message) {
  alert("Okay, so you want to send a message. Cool. Socket = [" + socket + "]");
  if (socket != null) {
    alert("Step 1.");
    var finalMessage = JSON.stringify(message);
    alert("Step 2.");
    if (!isNullOrUndefined(finalMessage)) {
      // eslint-disable-next-line no-console
      console.log(socket);
      socket.send(finalMessage);
      alert("I've sent the message");
    } else {
      alert("The input was not correct!");
    }
  } else {
    alert("There is no websocket...");
  }
}

export default {
  name: "websocket",
  methods: {
    launchWebSocket,
    sendMessage
  }
};
