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
  client.on("join", ({ name, room, ...data }, callback) => {
    console.log("We have a new Connection!!!", name, room);
    // callback({ error: "true" });
  });
  client.on("disconnect", () => {
    console.log("User had left..");
  });
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
