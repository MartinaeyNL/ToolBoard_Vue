import { isNullOrUndefined } from "util";

function launchWebSocket(host, port, route, store, mutation) {
  // Check if browser supports websocket
  var socket = null;
  if ("WebSocket" in window) {
    socket = new WebSocket("ws://" + host + ":" + port + route);
    // When opening
    socket.onopen = function() {
      store.commit(mutation, socket);
      alert("The connection is ready!");
      //alert("[" + store.getters.webSocketOBS + "] & type = [" + mutation + "]");
    };
    // When it receives a message
    socket.onmessage = function(evt) {
      alert("Received the message: [" + evt.data + "]");
    };
    socket.onclose = function() {
      store.commit(mutation, null);
      alert("Closed the connection :(");
      //alert("[" + store.getters.webSocketOBS + "] & type = [" + mutation + "]");
    };
  } else {
    alert("Your browser doesn't support WebSockets. Lol.");
  }

  // Making sure the connection closes on refresh.
  window.onbeforeunload = function() {
    this.socket.close();
  };

  return socket;
}

/*--------------------------------------------------------------------*/

function sendMessage(socket, message) {
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
