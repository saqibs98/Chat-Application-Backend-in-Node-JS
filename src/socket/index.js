function chat(io) {
  io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    io.emit("welcome", "Welcome to my app!");

    socket.on("addUser", (user_id) => {
      console.log(data);
      socket.broadcast.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

module.exports = chat;
