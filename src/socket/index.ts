function chat(io:any) {
  io.on("connection", (socket:any) => {
    console.log("user connected", socket.id);

    io.emit("welcome", "Welcome to my app!");

    socket.on("addUser", (user_id:any) => {
      //console.log(data);
      socket.broadcast.emit("message", user_id);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

module.exports = chat;
