const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./routers/router");
const {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser,
} = require("./Helpers/Users");

const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on("connection", (client) => {
  /**
   * Event gets triggered when new user request to get added in a room
   */
  client.on("join", ({ name, room }, callback) => {
    console.log("We have a new Connection!!!", name, room);
    const { user, error } = addUser({ id: client.id, name, room });

    if (error) return callback(error);

    // Will send a welcome message to the new user

    client.emit("message", {
      user: "admin",
      text: `${user.name} welcome to the room ${user.room}`,
    });

    // Will send message to all the users beside that sepecific user in a particular room that a new user had joined
    client.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    // Inform other users of other users avilabble in the Application
    client
      .to(user.room)
      .emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });

    client.join(user.room);
    callback();
  });

  client.on("sendMessage", (message, callback) => {
    const user = getUser({ id: client.id });
    if (user) {
      io.to(user.room).emit("message", { user: user.name, text: message });
      client.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }

    // Fucntion is called when a message has been sent to the user in a room.
    callback();
  });

  client.on("disconnect", () => {
    let user = getUser(client.id);
    if (user) {
      user = removeUser(client.id);
      client.to(user?.room).emit("message", `${user?.name} has left !!`);
    }

    console.log("User had left..");
  });
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
