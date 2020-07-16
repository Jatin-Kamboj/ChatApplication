const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./routers/router");
const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on("connection", (client) => {
  client.on("event", (data) => {
    console.log("We have a new Connection");
  });
  client.on("disconnect", () => {
    console.log("Connection has Disconnected");
  });
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
