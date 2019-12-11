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
    return false;
  });
});

http.listen(port, function() {
  console.log("listening on *:" + port);
});
