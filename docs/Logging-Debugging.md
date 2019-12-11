# Unified Debugging/logging for Web/Hybrid apps

- Establish a socket connection between client and server
- Configure server to listen to the client (mobile app)
- Server can output messages to file our server console
- Server can optionally emit a broadcast of the received message (like in a chat)
- Optionally have a web app listen to the broadcast socket messages and display them

## Client

Either insert socket io script in web/hybrid app `index.html` or use `import` or `require` (see below)

```html
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
```

Add client code. See [Client API](https://socket.io/docs/client-api/)

```js
import io from 'socket.io-client';

const socket = io();
const createSender = (onAfterSend, type) => (msg, msgType = "log") => {
  type = type || msgType;
  socket.emit(type, msg);
  onAfterSend && onAfterSend(msg, type);
};

// to additionally log every message to the client console
const onMsgSent = (msg, type = 'log') => console[type](msg)

// create send msg/log function
const log = createSender(onMsgSent);

// use it somewhere in the code
log('hello)
```

A sample client can be found in `src/socket-logger.ts`

## Server

See [Server API](https://socket.io/docs/server-api/)

```js
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;

io.on("connection", function(socket) {
  console.log("user connected");

  ["log", "info", "warn", "error"].map(level => {
    socket.on(level, function(msg) {
      const logFn = console[level];
      logFn(msg);
    });
  });
});

http.listen(port, function() {
  console.log("listening on *:" + port);
});
```

Sample log server can be found in `/server/`
