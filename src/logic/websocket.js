function launchWebSocket() {
  // Check if browser supports websocket
  if ("WebSocket" in window) {
    var socket = new WebSocket("ws://localhost:4444");

    // When opening
    socket.onopen = function() {
      socket.send("This is a blablabla message");
      alert("I've sent the message");
    };

    // When it receives a message
    socket.onmessage = function(evt) {
      alert("Received the message: [" + evt.data + "]");
    };

    // When closing
    socket.onclose = function() {
      alert("Closed the connection :(");
    };
  } else {
    alert("Your browser doesn't support WebSockets. Lol.");
  }
}
