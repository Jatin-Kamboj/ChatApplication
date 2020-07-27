const users = [];

/**
 * Helper function will be used to add a new user in the application
 * @param {id} Id of user to be added
 */
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  console.log("addUser", users);
  const existingUser = users.find(
    (user) => user.name === name && user.room === room
  );

  if (existingUser) {
    return { error: "User Already Exists !!!" };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

/**
 * Helper function will be used to remove an existing user
 * @param {id} User id which is to be removed
 */
const removeUser = ({ id }) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

/**
 * Helper function will be used to fetch the details of a user
 * @param {id} User id whose details are to be fetched
 */
const getUser = ({ id }) => {
  console.log("getUser", users, typeof id);
  return users.find((user) => user.id === id);
};

/**
 * Helper function will be used to get all the users of a room
 * @param {room} Room name whose users are to be fetched
 */
const getUsersInRoom = (room) => {
  console.log("getUsersInRoom", users);
  const roomUsers = users.filter((user) => user.room === room);
  console.log("roomUsers", roomUsers);
  return roomUsers;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
