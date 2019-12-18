import { isNullOrUndefined } from "util";

var socket;

function launchWebSocket(host, port) {
  // Check if browser supports websocket
  if ("WebSocket" in window) {
    // And when the websocket isn't created yet
    if (isNullOrUndefined(socket)) {
      socket = new WebSocket("ws://" + host + ":" + port);
      // When opening
      socket.onopen = function() {
        alert("The connection is ready!");
      };

      // When it receives a message
      socket.onmessage = function(evt) {
        alert("Received the message: [" + evt.data + "]");
      };

      // When closing
      socket.onclose = function() {
        alert("Closed the connection :(");
        socket = null;
      };
    } else {
      alert("You've already got a connection!");
    }
  } else {
    alert("Your browser doesn't support WebSockets. Lol.");
  }

  // Making sure the connection closes on refresh.
  window.onbeforeunload = function() {
    this.socket.close();
  };
}

/*--------------------------------------------------------------------*/

function sendMessage(message) {
  if (socket != null) {
    var finalMessage = JSON.stringify(message);
    if (!isNullOrUndefined(finalMessage)) {
      socket.send(message);
      alert("I've sent the message");
    } else {
      alert("The input was not correct!");
    }
  } else {
    alert("There is no websocket...");
  }
}

function isJSON(input) {
  if (typeof text !== "string") {
    return false;
  }
  try {
    JSON.parse(input);
    return true;
  } catch {
    return false;
  }
}

function isClosed() {
  return this.socket.readyState == WebSocket.CLOSED;
}

function isNull() {
  return this.socket == null;
}

export default {
  name: "websocket",
  methods: {
    launchWebSocket,
    sendMessage,
    isJSON,
    isClosed,
    isNull
  }
};
