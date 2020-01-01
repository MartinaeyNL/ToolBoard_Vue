import { isNullOrUndefined } from "util";

function launchWebSocket(host, port, route, store, errorHandler) {
  // Check if browser supports websocket
  this.websocket = null;
  if ("WebSocket" in window) {
    this.websocket = new WebSocket("ws://" + host + ":" + port + route);
    // When opening
    //this.websocket.onopen = function() {
    //  alert("The connection is ready!");
    //};
    // When it receives a message
    //this.websocket.onmessage = function(evt) {
    //  alert("Received the message: [" + evt.data + "]");
    //};
    this.websocket.onclose = function(evt) {
      alert("Closed the connection..");
      store.commit(errorHandler, evt);
      alert("Error code: [#" + evt.code + "]");
    };
  } else {
    alert("Your browser doesn't support WebSockets. Lol.");
  }

  // Making sure the connection closes on refresh.
  window.onbeforeunload = function() {
    this.websocket.close();
  };

  return this.websocket;
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
  return this.websocket.readyState == WebSocket.CLOSED;
}

function isNull() {
  return this.websocket == null;
}

export default {
  name: "websocket",
  data: {
    websocket: null
  },
  methods: {
    launchWebSocket,
    sendMessage,
    isJSON,
    isClosed,
    isNull
  }
};
